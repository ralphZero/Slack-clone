import React from 'react'
import ChatHeader from '../ChatHeader/Header/ChatHeader'
import Sidebar from '../Sidebar/Sidebar'
import Chat from './Chat'

const ChatPage = () => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
    return (
        <div style={style}>
            <ChatHeader />
            <div className='chatwrapper'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
export default ChatPage
