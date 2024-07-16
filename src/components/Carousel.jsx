import React, { useState } from "react";
import slideArrow from '../assets/sliderArow.png'

function Carousel({imgSource , imgAlt}){

    const [imageIndex , setImageIndex] = useState(0);
            

    const imgNext = () => setImageIndex((imageIndex + 1) % imgSource.length)
    const imgPrev = () => { imageIndex === 0 ? setImageIndex(imgSource.length - 1) : setImageIndex( imageIndex - 1)}
    


    return(
        <>

         <img src={imgSource[imageIndex]} alt={imgAlt} className="mainSliderImg"></img>
         <div onClick={imgNext} style={ imgSource.length <= 1  ? { display:'none'} : {}}><img src={slideArrow} className="slideNext"></img></div>
         <div onClick={imgPrev} style={ imgSource.length <= 1  ? { display:'none'} : {}}><img src={slideArrow} className="slidePrev"></img></div>
         <div className='counter' style={ imgSource.length === 1 ? { display:'none'} :{}}><p >{imageIndex+1}/{imgSource.length}</p></div>
        
        </>
    )


}
export default Carousel;