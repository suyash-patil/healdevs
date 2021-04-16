import React, { useState, useEffect } from 'react'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { auth } from './firebase'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const idTokenResult = await authUser.getIdTokenResult();
        console.log(user);
        setUser({ email: authUser.email, token: idTokenResult.token })

      }
    });
    return () => unSubscribe();
  }, [])
  return (
    <div className="App">

      <Header />
      <Navbar />
      <Footer />

    </div>
  );
}

export default App;
