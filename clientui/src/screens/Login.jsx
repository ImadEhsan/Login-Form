

import React from 'react'
import { successToast } from '../functions/messages'

const Login = () => {

  const login = () => successToast('You are successfully logged in')


  return (
    <div>
      <button onClick={login} >  Login  </button>
    </div>
  )
}

export default Login
