import React from 'react'
import Messages from './Messages'
import Input from './Input' 

function Chat() {
  return (
    <div className='chat'>
    <div className='userChat'>
    <span>Chikaboo</span>
    <Messages/>
    <Input/>
    </div>
   
    </div>
  )
}

export default Chat