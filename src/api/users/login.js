import axios from 'axios'

export default async ({ email, password }) => {
  try {
    const { data } = await axios.post('/api/login', { email, password })
    
    return {data}
  } catch (e) {
    return e.toString().includes('401') ? { status: 401 } : undefined
  }
}
