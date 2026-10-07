import styles from './PageHeader.module.css'

function PageHeader({ title, description }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export default PageHeader
