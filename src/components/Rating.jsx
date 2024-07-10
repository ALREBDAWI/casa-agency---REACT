import acvtiveStar from '../assets/active_star.png'
import inactiveStar from '../assets/star-inactive.png'

function Rating ({ratingValue}) {

    const maxStars = 5;
    const filledStars = Math.round(ratingValue) ;
    const emptyStars = maxStars - ratingValue;

    const stars = [];

    for(let i=0 ; i < filledStars ; i++ ){
        stars.push(<img className='star' src={acvtiveStar}></img>)
    }

    for( let i=0 ; i < emptyStars ; i++){
        stars.push(<img className='star' src={inactiveStar}></img>)
    }

    return(
        <div className='stars_rating'>
            {stars}
        </div>
    )
}

export default Rating;