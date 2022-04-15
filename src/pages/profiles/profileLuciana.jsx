import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './style.css'
import { Link } from 'react-router-dom'

function Profile() {

    return (
        <div className='bodyProfile'>
            <Header />
            <main className='mainProfile'>
                <section className='header'>
                    <p className='navHistory'>Home / Node / Luciana Matos</p>
                    <Link to='/search-node'><p className='back'><div className='arrow'>⃖</div> Voltar</p></Link>
                </section>
                <section className='_profile'>
                    <img className='avatarProfile' src="https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/lucianamatos.jpg" />
                    <div className='infos'>
                        <h3>Luciana Matos</h3>
                        <p className='role'>Desenvolvedor Back-end</p>
                        <a className='linkedin' href='https://www.linkedin.com' target={'_blank'}>Linkedin</a></div>
                    <div className='messageBtn'>ENVIAR MENSAGEM</div>
                </section>
                <div className='line' />
                <section className='experience'>
                    <div className='qualities'>
                        <div className='contain'>Back-end<div className='skill1' /></div>
                        <div className='contain'>Postgres<div className='skill2' /></div>
                        <div className='contain'>Express<div className='skill3' /></div>
                        <div className='contain'>Node.js<div className='skill4' /></div>
                    </div>
                    <div className='xp'>
                        <h3>Experiências</h3>
                        <p className='xpContent'>Migrei da área de Pedagogia para a de Desenvolvimento de Software 4 anos atrás. Desde então, tive a oportunidade de colocar em prática meus conhecimentos em projetos pessoais, freelas e trabalhos voluntários. Na FCamara atuei em projetos para grandes empresas, como Buscapé, Unimed, Walmart, Dasa e Duratex.</p><br></br><p className='xpContent'>Sou apaixonada pelo back-end e por ensinar, compartilhar o que sei. Por isso, gosto de ajudar os colegas a vencerem bugs que parecem sem solução.</p>
                    </div>
                </section>
                <section className='recomendations'>
                    <h3>Recomendações</h3>
                    <p className='recContent'>Luciana é uma ótima profissional, sempre disposta a ajudar seus colegas. Muito inteligente, sempre tira uma solução da cartola para os mais diversos problemas!</p>
                    <p className='recAuthor'>-- Marcelo Gregório, Desenvolvedor Full-Stack Senior</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile