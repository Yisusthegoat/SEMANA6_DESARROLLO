import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Directory from './pages/Directory'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import { useDemoUsers } from './hooks/useDemoUsers'

function App() {
  const usersState = useDemoUsers()
  const [localContacts, setLocalContacts] = useState([])

  // IA: organizar el flujo de contactos locales entre Registro y Directorio -> Solucion manual: el estado vive en App y se transmite por props a las rutas.
  function addLocalContact(contactData) {
    const contact = {
      id: `local-${crypto.randomUUID()}`,
      source: 'local',
      ...contactData,
    }

    setLocalContacts((currentContacts) => [contact, ...currentContacts])
    return contact
  }

  const directoryContacts = [...localContacts, ...usersState.users]

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/directorio"
            element={
              <Directory
                contacts={directoryContacts}
                error={usersState.error}
                isLoading={usersState.isLoading}
                onRetry={usersState.reloadUsers}
              />
            }
          />
          <Route
            path="/registro"
            element={<Register onAddContact={addLocalContact} />}
          />
          <Route path="/acerca" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
