import '../../style.css'
import { Link } from 'react-router-dom'

function CardMaria() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/mariaantonia.jpg'/>
            <div className='profile'>
            <strong className='userName'>Maria Antônia</strong>
            <small className='userBio'>UX/UI Designer Senior</small></div>
            <div className='skills'>
            <div className='content'>
                <p>Kanban</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Figma</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>UX Research</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Acessibilidade</p><div className="skillbar4"/></div>
            <Link to='/profile-maria'><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default CardMaria