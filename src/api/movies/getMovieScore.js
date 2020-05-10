import axios from 'axios'

export default async (name) => {
  try {
    const { data } = await axios.get(`/api/movie-score/${name}`)
    return data
  } catch (e) {
    return
  }
}
