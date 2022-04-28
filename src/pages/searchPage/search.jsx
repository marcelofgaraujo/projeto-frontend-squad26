import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './style.css'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../contexts/contextSearch'
import axios from 'axios'

function Search() {
  const [users, setUsers] = useState([])
  const { inputSearch } = useContext(Context)

  const fetchUsers = async() => {
    const response = await axios.get('http://localhost:5000/users')
    const filteredUsers = response.data.filter((user) => user.name.toLowerCase().includes(inputSearch.toLowerCase()))
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <Header />
      <main className='mainSearch'>
        <section className='top'>
          <Link to='/'><div type='button' className='newSearch'>NOVA BUSCA</div></Link>
          <span>{inputSearch}</span>
        </section>
        <div className='cards'>
          {
            users.map(item =>
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                bio={item.bio}
                avatar={item.avatar}
                online={item.online}
                skill_1={item.skill_1}
                skill_2={item.skill_2}
                skill_3={item.skill_3}
                skill_4={item.skill_4}
              />)
          }
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Search