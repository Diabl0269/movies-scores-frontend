import axios from 'axios'

export default async (updateObj) => {
  try {
    const { token } = localStorage

    const { data } = await axios.patch('/api/movie-score', updateObj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data
  } catch {
    return 
  }
}
