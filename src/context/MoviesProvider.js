import React, { useEffect, useState, useContext, createContext } from 'react'
import getMoviesFromServer from '../api/movies/getMovies'
import queryDefault from '../data/queryDefault.json'

const MoviesContext = createContext()
const MoviesProvider = (props) => {
  const [gettingRecords, setGettingRecords] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await getMovies(queryDefault)
    }
    fetchData()
  }, [])

  //needs to be called with a query or a type
  const getMovies = async (query) => {
    setGettingRecords(true)
    const data = await getMoviesFromServer(query)
    setMovies(data)
    setGettingRecords(false)
  }

  return (
    <MoviesContext.Provider
      value={{
        getMovies,
        gettingRecords,
        movies,
        queryDefault
      }}
      {...props}
    />
  )
}

const useMovies = () => useContext(MoviesContext)
export { MoviesProvider, useMovies }
