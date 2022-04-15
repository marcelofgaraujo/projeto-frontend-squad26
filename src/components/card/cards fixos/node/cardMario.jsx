import '../../style.css'

function CardMario() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/mariobarros.jpg'/>
            <div className='profile'>
            <strong className='userName'>Mario Barros</strong>
            <small className='userBio'>Tech Lead</small></div>
            <div className='skills'>
            <div className='content'>
                <p>Node.js</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Spring</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>C#</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Java</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default CardMario