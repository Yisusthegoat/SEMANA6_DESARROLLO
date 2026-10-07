import { useMemo, useState } from 'react'
import ContactCard from '../components/ContactCard'
import PageHeader from '../components/PageHeader'
import styles from './Directory.module.css'

function normalizeSearch(text) {
  return text.trim().toLowerCase()
}

function Directory({ contacts, error, isLoading, onRetry }) {
  const [searchText, setSearchText] = useState('')

  const filteredContacts = useMemo(() => {
    const search = normalizeSearch(searchText)

    if (!search) {
      return contacts
    }

    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search)
      )
    })
  }, [contacts, searchText])

  return (
    <div>
      <PageHeader
        title="Directorio"
        description="Consulta contactos de demostracion obtenidos desde una API y los contactos que registres localmente."
      />

      <div className={styles.toolbar}>
        <label className={styles.searchLabel} htmlFor="search">
          Buscar por nombre o correo
        </label>
        <input
          id="search"
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Ejemplo: Leanne o sierra"
        />
      </div>

      {isLoading ? <p className={styles.state}>Cargando directorio...</p> : null}

      {error ? (
        <div className={styles.error} role="alert">
          <p>{error}</p>
          <button type="button" onClick={onRetry}>
            Reintentar
          </button>
        </div>
      ) : null}

      {!isLoading && !error && filteredContacts.length === 0 ? (
        <p className={styles.state}>
          No se encontraron contactos con ese criterio de busqueda.
        </p>
      ) : null}

      {!isLoading && !error && filteredContacts.length > 0 ? (
        <div className={styles.grid}>
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Directory
