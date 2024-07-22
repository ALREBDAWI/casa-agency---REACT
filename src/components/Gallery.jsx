import React from 'react';
import Data from '../logements.json';

const RenderCards = () => {
    return (
        <section className="home_gallery">
            {Data.items.map((card) => (
                <figure key={card.id}>
                    <div className="gradiant"></div>
                    <a href={`Fiche-Logement/${card.id}`}>
                        <img src={card.cover} alt={card.title} />
                    </a>
                    <p>{card.title}</p>
                </figure>
            ))}
        </section>
    );
};

export default RenderCards;
