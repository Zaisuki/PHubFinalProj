import React from 'react'
import pic from '../../assets/img/Pic.jpg';

function Input() {
  return (
    <div className='input'>
        <input type='text' placeholder='Type Something...'/>
        <div className='send'>
        <img src={pic} alt="Pic"/>
        <button>Send</button>
        </div>
    </div>
  )
}

export default Input