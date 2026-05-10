import './Clients.css'

function Clients() {
  const clientLogos = [
    'BNI',
    'Radisson',
    'Studios',
    'Tradex Markets',
    'Jhumaa Dutta',
    'Vihana Arya',
    'Taste Great',
    'BELISA',
    'Vajra',
    'SKR Group',
    'Re-troygant',
    'Mahua House',
    'Mish',
    'Griha Shiksha Kendra',
    'AFS',
    'Ragini'
  ]

  return (
    <section className="clients">
      <div className="clients-container">
        <h2 className="clients-title">250+ Clients Trusted Us</h2>
        <div className="clients-grid">
          {clientLogos.map((client, index) => (
            <div key={index} className="client-logo">
              <div className="client-logo-placeholder">{client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
