import React from 'react'
import { GiCompass, GiDiamondHard, GiInterdiction } from 'react-icons/gi'

function Mission() {
  return (
    <div className='mission-container'>
        <div className='mission-first-flex'>
            <h1>Custom Furniture Built Only For You</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
        </div>
        <div className='mission-second-flex'>
            <div className='mission-text-container'>
                <span><GiCompass /></span>
                <h2>Mission</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
            <div className='mission-text-container'>
                <span><GiDiamondHard /></span>
                <h2>Vision</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
            <div className='mission-text-container'>
                <span><GiInterdiction /></span>
                <h2>History</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
            
        </div>
    </div>
  )
}

export default Mission