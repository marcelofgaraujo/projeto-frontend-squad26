import { useState } from 'react'
import '/src/styles/index.css'

function Home() {

  return (
    <>
      <header>
        <div className='logo' />
        <div className='avatar' />
      </header>
      <main>
        <aside>
          <div className='main-image' />
          <form method='GET'>
          <input type={'search'} placeholder='O que você procura?' maxLength={35} />
          <button type='submit'></button>
          </form>
          <section className='suggestion'>
          <strong>Sugestões:</strong>
          <div>Acessibilidade</div>
          <div>React</div>
          <div>Scrum</div>
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
      <footer>
        <div className='logo' />
      </footer>
    </>
  )
}

export default Home
