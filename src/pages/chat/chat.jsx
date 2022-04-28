import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import Headerlogado from '../../components/header/header-logado'
import Footer from '../../components/footer/footer'
import ChatBox from '../../components/chatBox'

function Chat() {
    const [user, setUser] = useState([])
    const { id } = useParams()
    const [chat, setChat] = useState([]);
    const [chatContent, setChatContent] = useState();
    const inputRef = useRef(null);

    function addChatBox() {
        const newChat = {
            content: chatContent
        }
        setChat(prevState => [...prevState, newChat])
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    const fetchProfileById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setUser(response.data)
    }

    useEffect(() => {
        fetchProfileById()
    }, [])

    return (
        <div className='bodyDiv'>
            <Headerlogado />
            <main className='mainChat'>
                <div className='chat-box'>
                    <div className='headerChat'>
                        <img className='user-chat' src={user.avatar} />
                        <div className='user-info'>
                            <strong className='user-name'>{user.name}</strong>
                            <small className='user-role'>{user.bio}</small>
                        </div>
                    </div>
                    <div className='chat-body'>
                        {
                            chat.map((messageChat, index) =>
                                <ChatBox
                                    key={index}
                                    content={messageChat.content}
                                />)
                        }
                        {chat.length > 0 &&
                            <div className='confirmed' />
                        }
                    </div>
                    <input wrap='hard' className='message' ref={inputRef} type={'text'} onChange={e => setChatContent(e.target.value)} placeholder='Digite sua mensagem aqui' /><button onClick={addChatBox} className='send-message' />
                </div>
                <div className='outside'>
                    <a href='/search'> <div className='change-page'>BUSCAR NOVO PERFIL</div></a>
                    <a href='/'><div className='change-page'>IR PARA HOME</div></a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Chat