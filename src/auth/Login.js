import React, { useState } from 'react'
import { auth, googleAuthProvider } from '../firebase'
import { Link } from 'react-router-dom'
import './login.css';


const Login = ({ history, user, setUser }) => {

  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      setUser({ email: user.email, token: idTokenResult.token })
      history.push("/patient");
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div class="container-fluid login">
        <div class="blurred-box">
          <div class="user-login-box">
            <div class="user-name">Login</div>
            <button class="glass" onClick={googleLogin}>
              Google
          </button>
            <button class="glass" onClick={googleLogin}>
              Facebook
          </button>
            <button class="glass" onClick={googleLogin}>
              Github
          </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login


