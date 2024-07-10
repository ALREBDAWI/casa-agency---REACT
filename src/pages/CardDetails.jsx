import React from "react";
import data from "../logements.json"
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";

const CardDetails = () => {
const {id} = useParams();
const item = data.items.find(item => item.id.toString() === id) ;

if(!item){
   return( <p>element not found</p>)

}

    return(

        <>
            < Carousel imgSource={item.pictures} imgAlt={`image de ${item.title}`} />
            <h1>{item.title}</h1>
            <p>{id}</p>
        </>
    )

}

export default CardDetails;