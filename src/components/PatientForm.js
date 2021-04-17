import React, { useState } from 'react'
import { db } from '../firebase';
import './patientform.css'
import { useHistory } from 'react-router-dom'

const PatientForm = ({ setUser, user }) => {

  const [diary, setDiary] = useState("");
  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (user) {

      console.log(user)
      db.collection("questions").add({
        email: user.email,
        dailyDiary: diary,
        timestamp: date.getDate().toString() + date.getMonth().toString()
      });
      window.localStorage.setItem("date", date.getDate().toString() + date.getMonth().toString());
    }
    else {
      history.push("/login");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={(e) => setDiary(e.target.value)}>
          {diary}
        </textarea>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PatientForm
