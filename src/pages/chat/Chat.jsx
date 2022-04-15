import { useState } from 'react'
import './style.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChatBox from '../../components/chatBox'

function Chat() {

    const [chat, setChat] = useState([]);
    const [chatContent, setChatContent] = useState();

    function addChatBox() {
        const newChat = {
            content: chatContent
        }
        setChat(prevState => [...prevState, newChat])
    }


    return (
        <div className='bodyDiv'>
            <Header />
            <main className='mainChat'>
            <div className='chat-box'>
                <div className='headerChat'>
                    <img className='user-chat' src='https://f.i.uol.com.br/fotografia/2021/12/10/163915261961b37beb6b7d5_1639152619_3x2_md.jpg' />
                    <div className='user-info'>
                        <strong className='user-name'>Bianca Andrade</strong>
                        <small className='user-role'>UX/UI Designer Senior</small>
                    </div>
                </div>
                <div className='chat-body'>
                    {
                        chat.map(messageChat =>
                            <ChatBox
                                content={messageChat.content}
                            />)
                    }
                </div>
                <input className='message' type={'text'} onChange={e => setChatContent(e.target.value)} placeholder='Digite sua mensagem aqui' /><button onClick={addChatBox} className='send-message' />
            </div>
            <div className='outside'>
                <a href='/search'> <div className='change-page'>BUSCAR NOVO PERFIL</div></a>
                <a href='/home'><div className='change-page'>IR PARA HOME</div></a>
            </div>
            </main>
            <Footer />
        </div>
    )
}

export default Chat