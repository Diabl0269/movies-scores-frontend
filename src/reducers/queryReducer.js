import { query, name, score } from '../data/queryDefaults.json'

export default (state, action) => {
  const { type } = action

  switch (type) {
    case 'change_info':
      return { ...state, ...action.info }
    case 'score':
      return score
    case 'name':
      return name
    case 'query':
      return query
    default:
      return score
  }
}
