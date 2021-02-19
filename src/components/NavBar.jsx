// imbrl 
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            
            <nav> 
                <ul className="navbar">
                    <NavLink to="/" exact activeClassName="selected">
                        <li className="nav-item">Accueil</li>
                    </NavLink>

                    <NavLink to="/projets" activeClassName="selected">
                        <li className="nav-item">Projets</li>
                    </NavLink>

                    <NavLink to="contact" activeClassName="selected">                        
                        <li className="nav-item">Contact</li>
                    </NavLink>
                </ul>
                <div>
                    
                </div>          
            </nav>
        </div>
    )
}

export default NavBar
