import React from 'react';

const OwnerData = ({ ownerName, ownerImg }) => {
    return (
        <>
            <p className="ownerName">{ownerName}</p>
            <img src={ownerImg} className="ownerImg" alt="image du propriétaire" />
        </>
    );
};

export default OwnerData;
