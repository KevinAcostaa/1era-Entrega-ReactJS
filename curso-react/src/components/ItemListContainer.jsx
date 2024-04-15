


const ItemListContainer = ({mensaje})=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col text-center p-3">
                    <h2 style={{color:"black",fontWeight:"bold"}}>{mensaje}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemListContainer; 