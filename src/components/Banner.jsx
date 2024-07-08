
function Banner ({img , title , className}){
    return(
        <div className='banner'>
            <img src={img} className={className} ></img>
            { !title ? '' : <p> {title}</p> }

        </div>
    )
}

export default Banner