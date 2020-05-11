import axios from 'axios'

export default async (query) => {
  try {
    const { data } = await axios.post('/api/movies', query)
    return data
  } catch (e) {
    return
  }
}
