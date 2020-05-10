import axios from 'axios'

export default async (newUserData) => {
  try {
    const { data, status } = await axios.post('/api/user', newUserData)

    if (status === 409 || status === 400) return { status }

    return data
  } catch  {
    return
  }
}
