import React from 'react'
import Account from '../components/pages/Account'
import AccountUpdate from '../components/pages/AccountUpdate'
import Login from '../components/pages/Login'
import Main from '../components/pages/Main'
import NotFound from '../components/pages/NotFound'
import Private from '../components/pages/Private'
import SignUp from '../components/pages/SignUp'

export default {
  '/': () => <Main />,
  '/login': () => <Login />,
  '/sign-up': () => <SignUp />,
  '/account': () => <Private Page={Account} />,
  '/account/update': () => <Private Page={AccountUpdate} />,
  '/*': () => <NotFound />
}
