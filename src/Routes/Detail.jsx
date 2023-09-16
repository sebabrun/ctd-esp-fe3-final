import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Detail = () => {
  const params = useParams()
  const [dentist, setDentist] = useState()
  const navigate = useNavigate()

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => {
      setDentist(res.data)
    })
    },[params.id]);

  return (
    <section className='card-container'>
      <h2>Dentist Details N°{params.id}</h2>
      {dentist &&
          <div className='card-info'>
            <img src="../images/doctor.jpg" width={200} alt="" />
            <div className='card-info-description'>
              <h3>{dentist.name}</h3>
              <p><strong>Email:</strong> {dentist.email}</p>
              <p><strong>Phone:</strong> {dentist.phone}</p>
              <p><strong>Username:</strong> {dentist.username}</p>
              <p><strong>Website:</strong> https://{dentist.website}</p>
            </div>
          </div>
      }
      <div className='back-btn'>
        <button onClick={() => {navigate(-1)}}>←</button>
      </div>
    </section>
  )
}

export default Detail