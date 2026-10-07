import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { getDemoUsers } from '../services/usersApi'

export function useDemoUsers() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadToken, setReloadToken] = useState(0)

  const reloadUsers = useCallback(() => {
    setReloadToken((currentToken) => currentToken + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function loadUsers() {
      setIsLoading(true)
      setError('')

      try {
        const demoUsers = await getDemoUsers(controller.signal)
        setUsers(demoUsers)
      } catch (requestError) {
        if (axios.isCancel(requestError)) {
          return
        }

        setError(
          'No se pudo cargar el directorio de demostracion. Revisa tu conexion e intenta nuevamente.',
        )
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadUsers()

    return () => {
      controller.abort()
    }
  }, [reloadToken])

  return { users, isLoading, error, reloadUsers }
}
