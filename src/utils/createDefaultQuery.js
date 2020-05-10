import { score, name, query } from '../data/queryDefaults.json'

export default (type) => {
  switch (type) {
    case 'score':
      return score
    case 'name':
      return name
    case 'query':
      return query
    default:
      throw new Error(
        'createDefaultsQuery should only be called with one of these strings: score/name/query'
      )
  }
}
