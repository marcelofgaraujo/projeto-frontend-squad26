import '../../style.css'
import { Link } from 'react-router-dom'

function CardBianca() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/biancaandrade.jpg' />
            <div className='online'><p>ONLINE</p></div>
            <div className='profile'>
            <strong className='userName'>Bianca Andrade</strong>
            <small className='userBio'>UX/UI Designer Senior</small></div>
            <div className='skills'>
            <div className='content'>
                <p>Acessibilidade</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Figma</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Design System</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Carreira</p><div className="skillbar4"/></div>
            <Link to='/profile-bianca'><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default CardBianca