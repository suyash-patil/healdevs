import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const Doctor = ({ history, user, setUser }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      if (user.email !== "pullstackdevelopers@gmail.com") {
        history.push("/")
      }
      if (user.email === "pullstackdevelopers@gmail.com") {
        db.collection("questions").orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
              id: doc.id,
              userData: doc.data()

            })))
          })
      }
    }
  }, [user])

  return (
    <div>
      {
        data.map(({ userData, id }) => (
          <div>
            <p>{userData.email}</p>
            <p>{userData.dailyDiary}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Doctor
