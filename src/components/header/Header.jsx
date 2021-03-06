import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <header>
        <Link to='/home'><div className='logo' /></Link>
        <Link to='/login'><div className='avatar' /></Link>
    </header>
    )
}

export default Header