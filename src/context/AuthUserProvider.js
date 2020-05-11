import React, { useEffect, useState, createContext, useContext } from 'react'
import addUser from '../api/users/addUser'
import deleteUserRequest from '../api/users/deleteUser'
import getUser from '../api/users/getUser'
import startLogin from '../api/users/login'
import updateUserRequest from '../api/users/updateUser'
import { HashLoader } from 'react-spinners'
import { navigate } from 'hookrouter'

const AuthUserContext = createContext()
const AuthUserProvider = (props) => {
  const { token } = localStorage
  const [user, setUser] = useState({})
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
    return data ? setTokenAndUser(data) : status
  }

  const logout = () => {
    navigate('/')
    localStorage.removeItem('token')
    setUser({})
  }

  const deleteUser = async () => {
    const { status } = await deleteUserRequest()
    setUser({})
    return status
  }

  const updateUser = async (newUserData) => {
    const { data, status } = await updateUserRequest(newUserData)
    return data ? setUser(data) : status
  }

  return gettingUserData ? (
    <HashLoader />
  ) : (
    <AuthUserContext.Provider
      value={{ user, login, logout, signUp, deleteUser, updateUser }}
      {...props}
    />
  )
}

const useUser = () => useContext(AuthUserContext)
export { AuthUserProvider, useUser }
