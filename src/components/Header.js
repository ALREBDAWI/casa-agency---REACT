import Logo from "./Logo.js";

function Header(){
     
    return(
     <header className="header">
          <nav>
               <Logo/>
               <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/Propos">A Propos</a></li>

               </ul>
          </nav>          
     </header>
    );
        
};

export default Header