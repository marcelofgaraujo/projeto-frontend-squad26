import { useState, useContext } from 'react'
import './style.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import { Context } from '../../contexts/contextSearch'

function Home() {

  const {setInputSearch} = useContext(Context)
  
  return (
    <>
      <Header />
      <main className='mainHome'>
        <aside>
          <div className='main-image' />
          <form className='searchForm' method=''>
          <input className='searchInput' type={'search'} placeholder='O que você procura?' onChange={(e) => setInputSearch(e.target.value)} maxLength={35} />
          <Link to='/search'><button className='searchBtn' type='button' /></Link>
          </form>
          <section className='suggestion'>
          <strong>Sugestões:</strong>
          <div>Acessibilidade</div>
          <div>Figma</div>
          <div>Node</div>
          </section>
        </aside>
        <article>
          <h3>Como funciona o Technical Share?</h3>
          <ul>
            <div className='hiddenBar' />
            <div className="list">Pesquise por um colaborador ou assunto de interesse</div>
            <div className="list">Escolha o perfil mais indicado para lhe ajudar</div>
            <div className="list">Faça login para enviar mensagem ao colaborador</div>
            <div className="list">Envie mensagem com suas dúvidas</div>
            <div className="list">Pronto, agora é só aguardar o retorno do colaborador escolhido</div>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Home