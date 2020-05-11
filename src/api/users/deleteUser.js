import axios from 'axios'

export default async () => {
  try {
    const { token } = localStorage
    const { status } = await axios.delete('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return status === 204 ? {} : { status: 500 }
  } catch (e) {
    return e.toString().includes('500') ? { status: 500 } : {}
  }
}
