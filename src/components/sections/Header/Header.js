import { Link } from 'react-router-dom';

import './Header.css'
import logo from '../../../assets/library.png'

const Header = () => {
    return (
        <header>
            <Link className='header-link' to='/'>
                <img src={logo} className="app-logo" alt="logo" />
                <h1>Organize Your Home Library</h1>
            </Link >
        </header>
    );
}

export default Header;