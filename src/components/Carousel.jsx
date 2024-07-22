import React, { useState } from 'react';
import slideArrow from '../assets/sliderArow.png';

function Carousel({ imgSource, imgAlt }) {
    const [imageIndex, setImageIndex] = useState(0);

    const imgNext = () => {
        setImageIndex((imageIndex + 1) % imgSource.length);
    };

    const imgPrev = () => {
        setImageIndex(imageIndex === 0 ? imgSource.length - 1 : imageIndex - 1);
    };

    return (
        <>
            <img 
                src={imgSource[imageIndex]} 
                alt={imgAlt} 
                className="mainSliderImg" 
            />
            <div 
                onClick={imgNext} 
                style={imgSource.length <= 1 ? { display: 'none' } : {}}
            >
                <img 
                    src={slideArrow} 
                    className="slideNext" 
                    alt="Next image" 
                />
            </div>
            <div 
                onClick={imgPrev} 
                style={imgSource.length <= 1 ? { display: 'none' } : {}}
            >
                <img 
                    src={slideArrow} 
                    className="slidePrev" 
                    alt="Previous image" 
                />
            </div>
            <div 
                className="counter" 
                style={imgSource.length === 1 ? { display: 'none' } : {}}
            >
                <p>{imageIndex + 1}/{imgSource.length}</p>
            </div>
        </>
    );
}

export default Carousel;
