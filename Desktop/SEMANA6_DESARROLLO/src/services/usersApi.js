import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function normalizeUser(user) {
  return {
    id: `api-${user.id}`,
    source: 'api',
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.address?.city ?? 'Ciudad no disponible',
  }
}

export async function getDemoUsers(signal) {
  const response = await axios.get(USERS_URL, { signal })
  return response.data.map(normalizeUser)
}
