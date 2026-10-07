import styles from './ContactCard.module.css'

function ContactCard({ contact }) {
  const sourceText =
    contact.source === 'local' ? 'Registro local' : 'Dato demo de API'

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{contact.name}</h3>
        <span className={styles.badge}>{sourceText}</span>
      </div>
      <dl className={styles.details}>
        <div>
          <dt>Correo</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
        </div>
        <div>
          <dt>Telefono</dt>
          <dd>{contact.phone}</dd>
        </div>
        <div>
          <dt>Ciudad</dt>
          <dd>{contact.city}</dd>
        </div>
      </dl>
    </article>
  )
}

export default ContactCard
