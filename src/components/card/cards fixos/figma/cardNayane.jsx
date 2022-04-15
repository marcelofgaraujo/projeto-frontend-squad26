import '../../style.css'
import { Link } from 'react-router-dom'

function CardNayane() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/nayanedossantos.jpg'/>
            <div className='online'><p>ONLINE</p></div>
            <div className='profile'>
            <strong className='userName'>Nayane dos Santos</strong>
            <small className='userBio'>UX/UI Designer Pleno</small></div>
            <div className='skills'>
            <div className='content'>
                <p>Acessibilidade</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Prototipagem</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Adobe XD</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Figma</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default CardNayane