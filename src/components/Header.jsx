import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header(){


    return(
     <header className="header">
          <nav>
               <Logo/>
               <ul>
                    <li><NavLink  to="/" className='link' >Accueil</NavLink></li>
                    <li><NavLink to="/Propos" className='link' >A Propos</NavLink></li>

               </ul>
          </nav>          
     </header>
    );
        
};

export default Header