import React from 'react'
import './Music.css'
import audio from './audio.mp3'

export default function Music () {
  return (
    <div className='music-container'>
      <div className='animation'>
        <div className='musictext'>
          <p>We play different finnish songs, some very known some not so known.
            We have some changes to songs to make them more unique.</p>
            <p>Here is our demo music. Great things coming soon! Stay tuned!</p>
          <audio controls>
            <source src = {audio} type = "audio/mpeg"/>
          </audio>
        </div>
      </div>
    </div>
  )
}