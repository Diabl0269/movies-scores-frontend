import axios from 'axios'

export default async () => {
  try {
    const { token } = localStorage
    const { data } = await axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
        
    return data
  } catch  {
    return {}
  }
}
