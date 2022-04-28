import './style.css'
import { Link } from 'react-router-dom'

function Card(props) {

    return (
        <div className='card'>
            
            <img className='userAvatar' src={props.avatar}/>
            {props.online === true &&
            <div className='online'><p>ONLINE</p></div>
            }
            <div className='profile'>
            <strong className='userName'>{props.name}</strong>
            <small className='userBio'>{props.bio}</small></div>
            <div className='skills'>
            <div className='content'>
                <p>{props.skill_1}</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>{props.skill_2}</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>{props.skill_3}</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>{props.skill_4}</p><div className="skillbar4"/></div>
            <Link to={`/profile/${props.id}`}><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default Card