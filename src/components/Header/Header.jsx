import React from "react";
// import './_Header.scss'
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/logo/LOGO.png';


function Header(){
return (
    <header className="header">
        <Link to="/">
            <img src={logo} alt="Logo"></img>
        </Link>
        <nav className="nav">
             <NavLink to="/" className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}>Accueil</NavLink>
             <NavLink to="/APropos" className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}>A propos</NavLink>
        </nav>     
    </header>

)

}

export default Header