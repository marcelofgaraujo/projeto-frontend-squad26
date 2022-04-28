import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import axios from 'axios'
import './style.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../contexts/contextSearch'

function Profile() {
    const [user, setUser] = useState([])
    const { inputSearch } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()

    function backButton(e) {
        e.preventDefault()
        navigate('/search');
    }

    const fetchProfileById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setUser(response.data)
    }

    useEffect(() => {
        fetchProfileById()
    }, [])


    return (
        <div className='bodyProfile'>
            <Header />
            <main className='mainProfile'>
                <section className='header'>
                    <p className='navHistory'>Home / {inputSearch} / {user.name}</p>
                    <div className='back' onClick={backButton} ><div className='arrow'>⃖</div> Voltar</div>
                </section>
                <section className='_profile'>
                    <img className='avatarProfile' src={user.avatar} />
                    <div className='infos'>
                        <h3>{user.name}</h3>
                        <p className='role'>{user.bio}</p>
                        <a className='linkedin' href='https://www.linkedin.com' target={'_blank'}>Linkedin</a></div>
                    <Link className='goto' to={`/chat/${user.id}`}><div className='messageBtn'>ENVIAR MENSAGEM</div></Link>
                </section>
                <div className='line' />
                <section className='experience'>
                    <div className='qualities'>
                        <div className='contain'>{user.skill_1}<div className='skill1' /></div>
                        <div className='contain'>{user.skill_2}<div className='skill2' /></div>
                        <div className='contain'>{user.skill_3}<div className='skill3' /></div>
                        <div className='contain'>{user.skill_4}<div className='skill4' /></div>
                    </div>
                    <div className='xp'>
                        <h3>Experiências</h3>
                        <p className='xpContent'>{user.xp}</p>
                    </div>
                </section>
                <section className='recomendations'>
                    <h3>Recomendações</h3>
                    <p className='recContent'>{user.rec}</p>
                    <p className='recAuthor'>{user.recAuthor}</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile