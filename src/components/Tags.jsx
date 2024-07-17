function Tags({tagsSource}){

    return(
        <>
            <ul>        
                {tagsSource.map((tag , index) => (<li key={index} >{tag}</li>) )}
            </ul>
        </>
    )
}

export default Tags;