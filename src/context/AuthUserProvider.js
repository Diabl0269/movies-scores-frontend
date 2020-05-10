import React, { useEffect, useState, createContext, useContext } from 'react'
import { HashLoader } from 'react-spinners'
import getUser from '../api/users/getUser'
import addUser from '../api/users/addUser'
import startLogin from '../api/users/login'

const AuthUserContext = createContext()
const AuthUserProvider = (props) => {
  const { token } = localStorage
  const [user, setUser] = useState()
  const [gettingUserData, setGettingUserData] = useState(!!token)

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const data = await getUser()
        setUser(data)
        setGettingUserData(false)
      }
    }
    fetchData()
  }, [token])

  const setTokenAndUser = (userData) => {
    if (userData) {
      const { token } = userData
      localStorage.setItem('token', token)
      setUser(userData)
    }
  }

  const login = async (loginObj) => {
    const { data, status } = await startLogin(loginObj)
    if (data) setTokenAndUser(data)
    return { data, status }
  }

  const signUp = async (newUserData) => {
    const { data, status } = await addUser(newUserData)
    if (data) setTokenAndUser(data)
    return { data, status }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser()
  }

  return gettingUserData ? (
    <HashLoader />
  ) : (
    <AuthUserContext.Provider value={{ user, login, logout, signUp }} {...props} />
  )
}

const useUser = () => useContext(AuthUserContext)
export { AuthUserProvider, useUser }
