import React from 'react'
// eslint-disable-next-line no-unused-vars
import './Donate.css'
// import { useState } from 'react'

export default function Donate () {
  // const [donations, setDonations] = useState([])
  // const [newDonation, setNewDonation] = useState('')
  // const [newName, setNewName] = useState('')
  // const handleNameChange = (event) => {
  //   event.preventDefault()
  //   setNewName(event.target.value)
  // }
  // const handleValueChange = (event) => {
  //   event.preventDefault()
  //   setNewDonation(event.target.value)
  // }
  // const addDonation = (event) => {
    
  //   const donationObj = {
  //     name: newName,
  //     amount: newDonation
  //   }
  //   event.preventDefault()
  //   setDonations(donations.concat(donationObj))
  //   setNewDonation('')
  //   setNewName('')
  // }
  return (
    <div className='donate-container'>
      <h1>Donation form coming soon</h1>
        {/* <form onSubmit={addDonation}>
          name: <input value={newName}
          placeholder = "input a name"
            onChange={handleNameChange}
          />
          amount: <input value={newDonation}
          placeholder = "input a donation amount"
            onChange={handleValueChange}
          />
          <button type="submit">Donate!</button>
        </form>
      <div className='donations'>
      <ul className='list'>
      {donations.map(person =>
        <li key={person.name}>
        {person.name} {person.amount}
        </li>
        
      )}
    </ul>
    </div> */}

      </div>
  )
}