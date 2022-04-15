import './header-logado.css'
import { Link } from 'react-router-dom'

function Headerlogado() {
    return (
    <header>
        <Link to='/home'><div className='logo' /></Link>
        <div className='avatarlogado' />
    </header>
    )
}

export default Headerlogado