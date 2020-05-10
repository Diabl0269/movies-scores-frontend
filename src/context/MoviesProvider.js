import React, { useEffect, useReducer, useState, useContext, createContext } from 'react'
import getMoviesFromServer from '../api/movies/getMovies'
import queryReducer from '../reducers/queryReducer'
import { score as scoreQueryDefault } from '../data/queryDefaults.json'

const MoviesContext = createContext()
const MoviesProvider = (props) => {
  const [gettingRecords, setGettingRecords] = useState()
  const [movies, setMovies] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, dispatchQuery] = useReducer(queryReducer, scoreQueryDefault)
  const [type, setType] = useState('score')

  useEffect(() => {
    const fetchData = async () => {
      loadMovies({ type })
    }
    fetchData()
  }, [type])

  const changeQueryType = (type) => {
    setType(type)
    dispatchQuery({ type })
  }

  const changeInfo = (info) => {
    dispatchQuery({ type: 'change_info', info })
  }

  const loadMovies = async () => {
    setGettingRecords(true)
    const data = await getMoviesFromServer({ query })
    const { page, total_pages, results } = data

    if (page) {
      setPage(page)
      setTotalPages(total_pages)
      setMovies(results)
    } else setMovies(data)

    setGettingRecords(false)
  }

  //needs to be called with a query or a type
  const getMovies = async (query) => {
    setGettingRecords(true)
    const data = await getMoviesFromServer({ query })
    const { page, total_pages, results } = data

    if (page) {
      setPage(page)
      setTotalPages(total_pages)
      setMovies(results)
    } else setMovies(data)

    setGettingRecords(false)
  }

  return (
    <MoviesContext.Provider
      value={{
        changeInfo,
        changeQueryType,
        dispatchQuery,
        getMovies,
        gettingRecords,
        movies,
        page,
        query,
        totalPages,
        type
      }}
      {...props}
    />
  )
}

const useMovies = () => useContext(MoviesContext)
export { MoviesProvider, useMovies }
