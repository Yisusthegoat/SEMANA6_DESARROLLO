import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import styles from './Register.module.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
}

function validateForm(formData) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!formData.name.trim()) {
    errors.name = 'El nombre es obligatorio.'
  }

  if (!formData.email.trim()) {
    errors.email = 'El correo es obligatorio.'
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Ingresa un correo con formato valido.'
  }

  if (!formData.phone.trim()) {
    errors.phone = 'El telefono es obligatorio.'
  }

  if (!formData.city.trim()) {
    errors.city = 'La ciudad es obligatoria.'
  }

  return errors
}

function Register({ onAddContact }) {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [savedContact, setSavedContact] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSavedContact(null)
      return
    }

    const contact = onAddContact({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
    })

    setSavedContact(contact)
    setFormData(initialForm)
  }

  return (
    <div>
      <PageHeader
        title="Registro"
        description="Agrega un contacto local para esta sesion. El registro se pierde al recargar porque no se guarda en la API."
      />

      {savedContact ? (
        <p className={styles.success} role="status">
          Contacto local registrado: {savedContact.name}. Ya aparece en el
          directorio.
        </p>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefono</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone ? (
            <span id="phone-error" className={styles.error}>
              {errors.phone}
            </span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="city">Ciudad</label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            aria-describedby={errors.city ? 'city-error' : undefined}
          />
          {errors.city ? (
            <span id="city-error" className={styles.error}>
              {errors.city}
            </span>
          ) : null}
        </div>

        <button type="submit">Guardar contacto</button>
      </form>
    </div>
  )
}

export default Register
