import './style.css'

export default function ChatBox(props) {
    return (
        <>
        <div className="chat">
            <div className='msg'>
                <p>{props.content}</p>
            </div>
            <div className='user-chat-image' />
        </div>
        <div className='confirmed'/>
        </>
    )
}