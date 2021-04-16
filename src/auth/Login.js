import React, { useState } from 'react'
import { auth, googleAuthProvider } from '../firebase'
import { Link } from 'react-router-dom'


const Login = ({ history, user, setUser }) => {

  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      setUser({ email: user.email, token: idTokenResult.token })
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <button onClick={googleLogin}>
        Login with Google
          </button>
    </div>
  )
}

export default Login


