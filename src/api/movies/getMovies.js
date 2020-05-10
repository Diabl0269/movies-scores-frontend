import axios from 'axios'
import createDefaultQuery from '../../utils/createDefaultQuery'

export default async ({ type, query }) => {
  //Will only get one of the props
  if (!type) type = query.type
  if (!query) query = createDefaultQuery(type)
  
  let url
  switch (type) {
    case 'score':
      url = '/api/movies-scores'
      break
    case 'name':
      url = '/api/movies/name'
      break
    case 'query':
      url = '/api/movies/query'
      break
    default:
      throw new Error(
        'getMovies should be called with an object containing a query with a property type, or just a type, being score/name/query'
      )
  }
  url += `/${JSON.stringify(query)}`  
  
  try {
    const { data } = await axios.get(url)
    
    return data
  } catch (e) {
    return
  }
}
