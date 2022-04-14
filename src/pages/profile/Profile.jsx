import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './style.css'

function Profile() {

    return (
        <div className='bodyProfile'>
            <Header />
            <main className='mainProfile'>
                <section className='header'>
                    <p className='navHistory'>Home / Acessibilidade / Bianca Andrade</p>
                    <p className='back'><div className='arrow'>⃖</div> Voltar</p>
                </section>
                <section className='_profile'>
                    <img className='avatarProfile' src="https://static1.purepeople.com.br/articles/3/31/72/83/@/3581814-gravida-de-6-meses-bianca-andrade-exibe-624x600-1.jpg" />
                    <div className='infos'>
                        <h3>Bianca Andrade</h3>
                        <p className='role'>UX/UI Designer</p>
                        <a className='linkedin' href='https://www.linkedin.com' target={'_blank'}>Linkedin</a></div>
                    <div className='messageBtn'>ENVIAR MENSAGEM</div>
                </section>
                <div className='line' />
                <section className='experience'>
                    <div className='qualities'>
                        <div className='contain'>Acessibilidade<div className='skill1' /></div>
                        <div className='contain'>Figma<div className='skill2' /></div>
                        <div className='contain'>Design System<div className='skill3' /></div>
                        <div className='contain'>Carreira<div className='skill4' /></div>
                    </div>
                    <div className='xp'>
                        <h3>Experiências</h3>
                        <p className='xpContent'>Atuo como UX/UI Designer há 8 anos, liderando equipes e coordenando projetos. Na FCamara atuei em trabalhos para grandes empresas, como Buscapé, Unimed, Walmart, Dasa e Duratex.</p><br></br><p className='xpContent'>Tenho vasta experiência no Figma e em regras de acessibilidade para construção de interfaces acessíveis para todos. Ajudo colegas a traçarem metas para suas carreiras e definirem os passos para crescer profissionalmente.</p>
                    </div>
                </section>
                <section className='recomendations'>
                    <h3>Recomendações</h3>
                    <p className='recContent'>Bianca é uma pessoa com potencial gigantesco. Encara os desafios e consegue motivar toda a equipe para seguirem juntos. Defende suas ideias com embasamento e procura sempre ajudar os colegas.</p>
                    <p className='recAuthor'>-- Amanda Farias, Head de Design</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile