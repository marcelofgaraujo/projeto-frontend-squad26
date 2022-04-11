import { useState, useEffect } from 'react'
import './style.css'

function Card() {
    const [user, setUser] = useState({ name:'', avatar:''})
    useEffect(() => {
        fetch('https://api.github.com/users/marcelofgaraujo')
        .then(response => response.json())
        .then(data => {
        setUser ({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.bio,
            skill_1: data.type,
            skill_2: data.node_id,
            skill_3: data.public_repos,
            skill_4: data.id
        })

        })
    }, [])

    return (
        <div className='card'>
            <img className='userAvatar' src={user.avatar}>
            </img>
            <strong>{user.name}</strong>
            <small>{user.bio}</small>
            <div className='skills'>
            <div className='content'>
                <p>{user.skill_1}</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>{user.skill_2}</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>{user.skill_3}</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>{user.skill_4}</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default Card