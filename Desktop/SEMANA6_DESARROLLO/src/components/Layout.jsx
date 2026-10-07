import { NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/directorio', label: 'Directorio' },
  { to: '/registro', label: 'Registro' },
  { to: '/acerca', label: 'Acerca de' },
]

function getLinkClass({ isActive }) {
  return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
}

function Layout({ children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <NavLink to="/" className={styles.brand} aria-label="Ir al inicio">
            CampusConecta
          </NavLink>
          <nav className={styles.nav} aria-label="Navegacion principal">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={getLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.panel}>{children}</section>
      </main>
    </div>
  )
}

export default Layout
