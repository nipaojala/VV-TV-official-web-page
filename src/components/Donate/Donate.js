import React from 'react'
// eslint-disable-next-line no-unused-vars
import './Donate.css'
import { useState } from 'react'

export default function Donate () {
  const [donations, setDonations] = useState([])
  const [newDonation, setNewDonation] = useState('')
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleValueChange = (event) => {
    setNewDonation(event.target.value)
  }
  return (
    <div className='donate-container'>
      <div className='donate'></div>
      name: <input value={newName}
      placeholder = "input a donation amount"
        onChange={handleNameChange}
      />
      amount: <input value={newDonation}
      placeholder = "input a donation amount"
        onChange={handleValueChange}
      />
      </div>
  )
}