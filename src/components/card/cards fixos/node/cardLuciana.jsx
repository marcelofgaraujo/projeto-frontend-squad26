import '../../style.css'
import { Link } from 'react-router-dom'

function CardLuciana() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/lucianamatos.jpg'/>
            <div className='profile'>
            <strong className='userName'>Luciana Matos</strong>
            <small className='userBio'>Desenvolvedora Back-end</small></div>
            <div className='skills'>
            <div className='content'>
                <p>Back-end</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Postgres</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Express</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Node.js</p><div className="skillbar4"/></div>
            <Link to='/profile-luciana'><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default CardLuciana