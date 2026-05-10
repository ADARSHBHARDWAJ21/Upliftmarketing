#!/usr/bin/env node
/**
 * Pushes Portfolio media to CLOUDINARY_CLOUD_NAME (default dzvjt7ecs).
 * Loads credentials from .env.local via npm run upload:portfolio
 *
 * For belisa/vajra/skr/client videos: uses local file if present,
 * else optional remote copy from CLOUDINARY_LEGACY_CLOUD (default dbiyd69hz).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import cloudinaryPkg from 'cloudinary'

const { v2: cloudinary } = cloudinaryPkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '..', 'src', 'assets')

const FILE_PAIRS = [
  ['Ragini (emotional) without price.png', 'ragini1'],
  ['Ragini (Home Energy) without price.png', 'ragini2'],
  ['Ragini (knee pain) without price.png', 'ragini3'],
  ['Ragini (Vastu) without price.png', 'ragini4'],
  ['AFS Logo (2).png', 'afslogo']
]

/** publicId matches portfolioMedia.js (images: no extension, videos: no extension) */
const FLEX_ASSETS = [
  {
    resourceType: 'image',
    publicId: 'belisa',
    locals: ['belisa.png', 'IMG_1204.PNG'],
    legacyDeliveryName: 'belisa.png'
  },
  {
    resourceType: 'image',
    publicId: 'vajra',
    locals: ['vajra.png', 'IMG_1319.PNG'],
    legacyDeliveryName: 'vajra.png'
  },
  {
    resourceType: 'image',
    publicId: 'skr',
    locals: ['skr.png', '1.png'],
    legacyDeliveryName: 'skr.png'
  },
  {
    resourceType: 'video',
    publicId: 'clientvideo1',
    locals: [
      'clientvideo1.mp4',
      'Product 10 H1 CTA 1.0.mp4'
    ],
    legacyDeliveryName: 'clientvideo1.mp4'
  },
  {
    resourceType: 'video',
    publicId: 'clientvideo2',
    locals: ['clientvideo2.mp4', 'Smile Gallery 3rd Oct Final.mp4'],
    legacyDeliveryName: 'clientvideo2.mp4'
  }
]

function legacyRemoteUrl (
  legacyCloud,
  resourceType,
  deliveryName
) {
  const kind =
    resourceType === 'video' ? 'video' : 'image'
  return `https://res.cloudinary.com/${legacyCloud}/${kind}/upload/${deliveryName}`
}

async function uploadFromDisk (
  filePath,
  resourceType,
  publicId,
  note
) {
  await cloudinary.uploader.upload(filePath, {
    resource_type: resourceType === 'video' ? 'video' : 'image',
    public_id: publicId,
    invalidate: true,
    overwrite: true
  })

  console.log(`OK ${publicId} ← ${note}`)
}

async function uploadFromRemote (remoteUrl, resourceType, publicId) {
  await cloudinary.uploader.upload(remoteUrl, {
    resource_type: resourceType === 'video' ? 'video' : 'auto',
    public_id: publicId,
    invalidate: true,
    overwrite: true
  })

  console.log(`OK ${publicId} ← legacy URL`)
}

async function resolveFlex ({ resourceType, publicId, locals, legacyDeliveryName }) {
  for (const name of locals) {
    const filePath = path.join(assetsDir, name)
    if (fs.existsSync(filePath)) {
      await uploadFromDisk(filePath, resourceType, publicId, name)
      return
    }
  }

  const rawLegacy = process.env.CLOUDINARY_LEGACY_CLOUD
  const legacyCloud =
    rawLegacy === 'off' ? null : (rawLegacy || 'dbiyd69hz')

  if (!legacyDeliveryName || !legacyCloud) {
    console.warn(
      `Skip ${publicId}: add one of [${locals.join(', ')}] to src/assets/`
    )
    return
  }

  const url = legacyRemoteUrl(legacyCloud, resourceType, legacyDeliveryName)

  try {
    await uploadFromRemote(url, resourceType, publicId)
  } catch {
    console.warn(
      `Skip ${publicId}: no local match and legacy fetch failed (${url}). Drop files into src/assets/ or fix LEGACY_CLOUD.`
    )
  }
}

async function main () {
  const cloud_name =
    process.env.CLOUDINARY_CLOUD_NAME || 'dzvjt7ecs'
  const api_key = process.env.CLOUDINARY_API_KEY
  const api_secret = process.env.CLOUDINARY_API_SECRET

  if (!api_key || !api_secret) {
    console.error(
      'Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET (e.g. in .env.local).'
    )
    process.exit(1)
  }

  cloudinary.config({ cloud_name, api_key, api_secret })

  for (const [localFile, publicId] of FILE_PAIRS) {
    const filePath = path.join(assetsDir, localFile)
    if (!fs.existsSync(filePath)) {
      console.warn(`Skip (missing file): ${localFile}`)
      continue
    }

    await uploadFromDisk(filePath, 'image', publicId, localFile)
  }

  for (const entry of FLEX_ASSETS) {
    await resolveFlex(entry)
  }

  console.log('')
  const rawLc = process.env.CLOUDINARY_LEGACY_CLOUD
  const lcExplain =
    rawLc === 'off'
      ? 'CLOUDINARY_LEGACY_CLOUD=off — no remote fallback.'
      : `Legacy fallback: ${rawLc || 'dbiyd69hz'}.`

  console.log(
    `Web shots use belisa/vajra/skr filenames when present; else IMG_1204.PNG, IMG_1319.PNG, 1.png — or legacy pull. Portfolio videos prefer clientvideo1/2.mp4, else reels. ${lcExplain}`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
