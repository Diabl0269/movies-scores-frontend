import axios from 'axios'

export default async (newUserData) => {
  try {
    const { token } = localStorage

    const { data, status } = await axios.patch('/api/user', newUserData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return { data }
  } catch (e) {
    let response
    if (e.toString().includes('400')) response = { status: 400 }
    if (e.toString().includes('409')) response = { status: 409 }
    if (e.toString().includes('500')) response = { status: 500 }
    return response
  }
}
