import React from 'react';

const Banner = ({ img, title, className }) => {
    return (
        <div className="banner">
            <img src={img} className={className} alt="Banner" />
            {title && <p>{title}</p>}
        </div>
    );
};

export default Banner;
