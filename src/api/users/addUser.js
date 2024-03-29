import axios from 'axios'

export default async (newUserData) => {
  try {
    const { data } = await axios.post('/api/users', newUserData)
    return { data }
  } catch (e) {
    let response
    if (e.toString().includes('400')) response = { status: 400 }
    if (e.toString().includes('409')) response = { status: 409 }
    if (e.toString().includes('500')) response = { status: 500 }
    return response
  }
}
