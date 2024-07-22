import Data from '../logements.json'


function RenderCards (){
return(
    <section className='home_gallery'>
        {Data.items.map(card => {
            return(
                    
                        <figure key={card.id}>
                            <div className='gradiant'></div>
                            <a href={`Fiche-Logement/${card.id}`} ><img src={card.cover}></img></a>
                            <p> {card.title} </p>

                        </figure>
                    
            )
        })}
    </section>
)
};

export default RenderCards