function Tags({tagsSource}){

    return(
        <>
            <ul>        
                {tagsSource.map((tag) => (<li>{tag}</li>) )}
            </ul>
        </>
    )
}

export default Tags;