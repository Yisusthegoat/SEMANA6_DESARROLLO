import PageHeader from '../components/PageHeader'
import styles from './About.module.css'

function About() {
  return (
    <div>
      <PageHeader
        title="Acerca de"
        description="CampusConecta aplica conceptos centrales de React para una practica de desarrollo de aplicaciones web."
      />

      <ul className={styles.list}>
        <li>React con Vite para construir una SPA en JavaScript y JSX.</li>
        <li>React Router para navegar entre paginas sin recargar el sitio.</li>
        <li>Axios, async/await y try/catch para consumir una API demo.</li>
        <li>
          useState, useEffect, props, children, eventos y renderizado
          condicional.
        </li>
        <li>CSS Modules para estilos encapsulados y responsive.</li>
      </ul>
    </div>
  )
}

export default About
