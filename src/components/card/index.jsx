import { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Card(props) {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src={props.avatar}/>
            <div className={props.online == true ? "online" : "offline"}><p>ONLINE</p></div>
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
            <Link to='/profile'><div className='button'>VER PERFIL{props.children}</div></Link>
            </div>
        </div>
    )
}

export default Card