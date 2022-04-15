import '../../style.css'
import { Link } from 'react-router-dom'

function CardAlice() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/alicesilva.jpg' />
            <div className='profile'>
            <strong className='userName'>Alice Silva</strong>
            <small className='userBio'>Product Owner</small></div>
            <div className='skills'>
            <div className='content'>
                <p>UX Research</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Sprint Design</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Carreira</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Acessibilidade</p><div className="skillbar4"/></div>
            <Link to='/profile-bianca'><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default CardAlice