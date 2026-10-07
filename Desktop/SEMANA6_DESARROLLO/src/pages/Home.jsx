import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import styles from './Home.module.css'

function Home() {
  return (
    <div>
      <PageHeader
        title="CampusConecta"
        description="Una SPA de demostracion para consultar contactos universitarios ficticios y registrar contactos locales durante la practica."
      />

      <div className={styles.notice}>
        Los usuarios de la API son datos ficticios de demostracion. No
        representan personas reales de una universidad.
      </div>

      <div className={styles.actions}>
        <Link className={styles.primaryAction} to="/directorio">
          Ver directorio
        </Link>
        <Link className={styles.secondaryAction} to="/registro">
          Registrar contacto
        </Link>
      </div>
    </div>
  )
}

export default Home
