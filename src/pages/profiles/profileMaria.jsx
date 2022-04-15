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
                    <p className='navHistory'>Home / Figma / Maria Antônia</p>
                    <Link to='/search-figma'><p className='back'><div className='arrow'>⃖</div> Voltar</p></Link>
                </section>
                <section className='_profile'>
                    <img className='avatarProfile' src="https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/mariaantonia.jpg" />
                    <div className='infos'>
                        <h3>Maria Antônia</h3>
                        <p className='role'>UX/UI Designer Senior</p>
                        <a className='linkedin' href='https://www.linkedin.com' target={'_blank'}>Linkedin</a></div>
                    <div className='messageBtn'>ENVIAR MENSAGEM</div>
                </section>
                <div className='line' />
                <section className='experience'>
                    <div className='qualities'>
                        <div className='contain'>Kanban<div className='skill1' /></div>
                        <div className='contain'>Figma<div className='skill2' /></div>
                        <div className='contain'>UX Research<div className='skill3' /></div>
                        <div className='contain'>Acessibilidade<div className='skill4' /></div>
                    </div>
                    <div className='xp'>
                        <h3>Experiências</h3>
                        <p className='xpContent'>Já fiz de um tudo nesta vida, de vender roupa em loja chique de shopping a vender água geladinha em locais de concurso público - e há quem diga que minha água resultou em muitas aprovações! Também trabalhei como hostess de evento e até fui bartender na Europa durante por um tempo.</p><br></br><p className='xpContent'>Enfim, tudo isso me fez ver que o importante mesmo é estar atento às necessidades do usuário, logo, nosso trabalho deve ter ele no centro.</p>
                    </div>
                </section>
                <section className='recomendations'>
                    <h3>Recomendações</h3>
                    <p className='recContent'>Recomendações da Maria: Trabalhar com a Maria me ensinou várias coisas, o que mais destaco no seu posicionamento como designer é questionar e provocar discussões no time de forma muito respeitosa. Além de um olhar técnico muito atento, também o olhar para o ser humano. Ter a Maria no time é certeza de qualidade nas entregas e de sensibilidade para com o outro. Se relaciona bem com outras áreas, faz as perguntas certas e o resultado disso só poderia ser um trabalho de altíssima qualidade. Sem falar da parte visual dos seus projetos, que são de um nível de detalhe e estética muito apurados!</p>
                    <p className='recAuthor'>-- Amanda Farias, Head de Design</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile