import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import './patientform.css'
import { useHistory } from 'react-router-dom'

const PatientForm = ({ setUser, user }) => {

  const [diary, setDiary] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    let date = new Date()
    if (user) {
      db.collection("questions").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().email === user.email) {
            if (doc.data().timestamp === date.getDate().toString() + date.getMonth().toString()) {
              setFormVisible(false);
              setInterval(history.push("/"), 2000)
            }
          }
        })
      });
    }
    else {
      history.push('/login');
    }
  }, [])

  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (user) {
      db.collection("questions").add({
        email: user.email,
        dailyDiary: diary,
        timestamp: date.getDate().toString() + date.getMonth().toString()
      });
      history.push("/");
    }
    else {
      history.push("/login");
    }
  }

  return (
    <div>
      {formVisible ? (
        <form onSubmit={handleSubmit}>
          <textarea onChange={(e) => setDiary(e.target.value)}>
            {diary}
          </textarea>
          <br />
          <button type="submit">
            Submit
        </button>
        </form>
      ) : (
        <h2>You have filled the form</h2>
      )}
    </div>
  )
}

export default PatientForm
