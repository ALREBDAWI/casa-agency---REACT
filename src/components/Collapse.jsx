import React, { useState } from 'react';
import arrow from '../assets/collapseArow.png';

const Collapse = ({ title, message, classname }) => {
    const [selected, setSelected] = useState(false);

    const toggle = () => {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <div className={classname}>
            <div className="item">
                <div className="title" onClick={toggle}>
                    <h2>{title}</h2>
                    <img
                        src={arrow}
                        className={`arrow ${selected ? 'open' : 'closed'}`}
                        alt="Arrow"
                    />
                </div>
                <div className={`content ${selected ? 'show' : 'hide'}`}>
                    {message}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
