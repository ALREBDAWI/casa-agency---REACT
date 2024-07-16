import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeMain from "./components/HomeMain";
import Error from "./components/Error";
import Propos from "./pages/Propos";
import CardDetails from "./pages/CardDetails";

import {Routes, Route, BrowserRouter} from "react-router-dom";

const App =()=>{

    return(
    <BrowserRouter>
        <div className="wrapper">

            <header>
               <Header /> 
            </header>
            <main>
                <div className="home_container">
                <Routes>
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<HomeMain />} />
                    <Route path="/Propos" element={<Propos />} />
                    <Route path="Fiche-Logement/:id" element={<CardDetails/>}/>
                    <Route path="/error" element={<Error />} />
                </Routes>
                </div>
            </main>
            <footer>
                <Footer /> 
            </footer>
        </div>
    </BrowserRouter>


/* <>
<BrowserRouter>
<Header />
<Routes>
    <Route path="/" element={<HomeMain />} />
    <Route path="/fiche_logement" element={<HabitatFile />} />
    <Route path="/Propos" element={<Propos />} />
    <Route path="*" element={<Error />} />

</Routes>
<Footer />
</BrowserRouter>
</> */
    );
};
   

export default App
