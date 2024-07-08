import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeMain from "./components/HomeMain";
import Error from "./components/Error";
import HabitatFile from "./components/HabitatFile";
import Propos from "./pages/Propos";
import Caroussel from "./pages/Caroussel";

import {createBrowserRouter, Routes, Route, BrowserRouter} from "react-router-dom";

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
                    <Route path="/" element={<HomeMain />} />
                    <Route path="/fiche_logement" element={<HabitatFile />} />
                    <Route path="/Propos" element={<Propos />} />
                    <Route path="caroussel/:id" element={<Caroussel/>}/>
                    <Route path="*" element={<Error />} />
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
