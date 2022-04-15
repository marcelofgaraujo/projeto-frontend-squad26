import { useState } from 'react'
import './style.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Header />
      <main className='mainHome'>
        <aside>
          <div className='main-image' />
          <form className='searchForm' method=''>
          <input className='searchInput' type={'search'} placeholder='O que você procura?' onChange={(e) => this.inputParams(e)} maxLength={35} />
          <button className='searchBtn' type='button' />
          </form>
          <section className='suggestion'>
          <strong>Sugestões:</strong>
          <Link to='/search-acessibilidade'><div>Acessibilidade</div></Link>
          <Link to='/search-figma'><div>Figma</div></Link>
          <Link to='/search-node'><div>Node</div></Link>
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