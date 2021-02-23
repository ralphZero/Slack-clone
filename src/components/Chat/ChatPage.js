import React from 'react'
import ChatHeader from '../ChatHeader.js/Header/ChatHeader'
import Sidebar from '../Sidebar/Sidebar'
import Chat from './Chat'

const ChatPage = () => {
    return (
        <div>
            <ChatHeader />
            <div className='chatwrapper'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
export default ChatPage
