
function OwnerData ({ownerName , ownerImg}){

    return(
        <>

            <p className="ownerName"> {ownerName} </p>
            <img src={ownerImg} className="ownerImg" ></img>

        </>
    )

}

export default OwnerData;