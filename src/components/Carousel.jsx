import React, { useState } from "react";

function Carousel({imgSource , imgAlt}){

    const [imageIndex , setImageIndex] = useState(0);
            

    const imgNext = () => setImageIndex((imageIndex + 1) % imgSource.length)
    const imgPrev = () => { imageIndex === 0 ? setImageIndex(imgSource.length - 1) : setImageIndex( imageIndex - 1)}
    


    return(
        <>
         <button onClick={imgNext} style={ imgSource.length <= 1  ? { display:'none'} : {}}>next</button>
         <button onClick={imgPrev} style={ imgSource.length <= 1  ? { display:'none'} : {}}>prev</button>
         <h2>{imageIndex+1}/{imgSource.length}</h2>
         <img src={imgSource[imageIndex]} alt={imgAlt} ></img>
        
        </>
    )


}
export default Carousel;