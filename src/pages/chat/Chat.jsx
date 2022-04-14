import './style.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Chat() {
    return (
        <div className='bodyDiv'>
            <Header />
            <div className='chat-box'>
                <div className='headerChat'>
                    <img className='user-chat' src='https://f.i.uol.com.br/fotografia/2021/12/10/163915261961b37beb6b7d5_1639152619_3x2_md.jpg'/>
                    <div className='user-info'>
                        <strong className='user-name'>Bianca Andrade</strong>
                        <small className='user-role'>UX/UI Designer Senior</small>
                    </div>
                </div>
                <div className='chat-body'>
                </div>
                <input className='message' type={'text'} placeholder='Digite sua mensagem aqui' /><button className='send-message' />
            </div>
            <div className='outside'>
                <a className='link-search' href='/search'> <div className='change-page'>BUSCAR NOVO PERFIL</div></a>
                <a className='link-search' href='/home'><div className='change-page'>IR PARA HOME</div></a> 
            </div>
            <Footer />
        </div>
    )
}

export default Chat