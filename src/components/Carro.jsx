import React from "react";
import CardsData from '../logements.json'

function Carro(){

    return(
        <>
        <h1>hello</h1>
        {CardsData.map(card => {
                    <img key={card.id} src={card.cover} ></img>

        })};
        
        </>
    )


}
export default Carro;