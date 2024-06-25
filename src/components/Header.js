import Logo from "./Logo.js";

function Header(){
     
    return(
     <header>
          <nav>
               <Logo/>
               <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>

               </ul>
          </nav>          
     </header>
    );
        
};

export default Header