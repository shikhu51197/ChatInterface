import React from 'react'

import ChatBox from '../Components/ChatBox';
import SendMessage from '../Components/SendMessage';

const ChatRoom = () => {
  return (
    <div className="bg-white h-screen">
      <ChatBox/>
      <SendMessage/>
    </div>
  )
}

export default ChatRoom
