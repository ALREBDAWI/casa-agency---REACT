import React from "react";
import data from "../logements.json"
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

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
            <Rating ratingValue={item.rating} />
            <Collapse key={id} title={'descreption'} message={item.description} />
            <Collapse key={id} title={'Équipements'} message={<ul> {item.equipments.map((equipment,index) => (<li key={index}>{equipment}</li>) )} </ul>} />
        </>
    )

}

export default CardDetails;