import React from 'react'
import mygirl from '../../assets/img/mygirl.jpg';

function Message() {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
      <img src={mygirl} alt=""/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Wassup</p>
        <img src={mygirl} alt=""/>
      </div>
    </div>
  )
}

export default Message