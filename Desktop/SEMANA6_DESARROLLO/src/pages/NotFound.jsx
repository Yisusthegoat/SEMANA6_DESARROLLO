import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div>
      <PageHeader
        title="Pagina no encontrada"
        description="La ruta que intentaste abrir no existe en CampusConecta."
      />
      <Link className={styles.link} to="/">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
