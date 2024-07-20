
function Banner ({img , title , className}){
    return(
        <div className='banner'>
            <img src={img} className={className} alt="image de banner"></img>
            { !title ? '' : <p> {title}</p> }

        </div>
    )
}

export default Banner