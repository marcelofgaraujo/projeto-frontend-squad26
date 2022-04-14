import { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Card() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/marcelofgaraujo')
        .then (response => response.json())
        .then(data => {
        setUser ({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.created_at,
            skill_1: data.public_repos,
            skill_2: data.id,
            skill_3: data.following,
            skill_4: data.node_id
        })

        })
    }, [])

    return (
        <div className='card'>
            <img className='userAvatar' src={user.avatar}/>
            <div className='online'><p>ONLINE</p></div>
            <div className='profile'>
            <strong className='userName'>{user.name}</strong>
            <small className='userBio'>{user.bio}</small></div>
            <div className='skills'>
            <div className='content'>
                <p>{user.skill_1}</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>{user.skill_2}</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>{user.skill_3}</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>{user.skill_4}</p><div className="skillbar4"/></div>
            <Link to='/profile' ><div className='button'>VER PERFIL</div></Link>
            </div>
        </div>
    )
}

export default Card