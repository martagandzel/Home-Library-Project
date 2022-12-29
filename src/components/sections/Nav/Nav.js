import { Link } from "react-router-dom";

import './Nav.css'


const Nav = (props) => {


    return (
        <nav className="nav-container">
            <ul className="main-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add a new book</Link></li>
                <li><Link to="/authors">Authors A–Z</Link></li>
            </ul>

        </nav>
    );
}

export default Nav;