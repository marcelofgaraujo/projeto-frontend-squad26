import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import './style.css'
import axios from 'axios'

function Search() {

  const [usuario, setUsers] = useState([]);
  const [q, setQ] = useState('')
 /* const [searchParam] = useState(['name', 'capital'])
  function search() {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]?.toString()?.toLowerCase()?.indexOf(q.toLowerCase()) > -1
        )
      })
    })
  }*/

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((res) =>
        setUsers(res.data))
  }, [])

  return (
    <>
      <Header />
      <main className='mainSearch'>
        <section className='top'>
          <a href='/home'><div type='button' className='newSearch'>NOVA BUSCA</div></a>
          <span>Acessibilidade</span>
        </section>
        <div className='cards'>
          {
            usuario.map(user =>
              <Card
                key={user.id}
                avatar={user.avatar}
                name={user.name}
                bio={user.bio}
                skill_1={user.skill_1}
                skill_2={user.skill_2}
                skill_3={user.skill_3}
                skill_4={user.skill_4}
                online={user.online}
              />)
          }
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Search