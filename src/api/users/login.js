import axios from 'axios'

export default async ({ email, password }) => {
  try {
    const { data } = await axios.post('/api/login', { email, password })

    return { data }
  } catch (e) {
    let response
    if (e.toString().includes('401')) response = { status: 401 }
    if (e.toString().includes('500')) response = { status: 500 }
    return response
  }
}
