import './style.css'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='loginBody'>
            <header className='headerLogin'>
                <div className='logoLogin' />
            </header>
            <section className='makeLogin'>
                <div className='headerDiv'>
                    Faça o login com sua conta FCamara para continuar
                </div>
            </section>
            <section className='formSection'>
                <form className='guest-card'>
                    <label for='email'>E-mail</label>
                    <input className='email-login' type={'email'} name='email' maxLength={50} /><div className='line-input' />
                    <label for='password'>Senha</label>
                    <input className='pass-login' type={'password'} name='password' maxLength={35} /><div className='line-input2'/>
                    <Link to='/chat'><button className='loginBtn' type='button'>ENTRAR</button></Link>
                    <a className='forgot' href=''>Esqueci a senha</a>
                </form>
            </section>
            <div className='under'>
                <div className='clap' />
                <section className='vantages'>
                    <h3>Com o Technical Share você pode:</h3>
                    <ul className='u-list'>
                        <div className="divVantages">Ter acesso ao perfil de todos os colaboradores FCamara</div>
                        <div className="divVantages">Enviar mensagens para tirar suas dúvidas</div>
                        <div className="divVantages">Visualizar os colaboradores online e disponíveis para ajudar agora</div>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Login