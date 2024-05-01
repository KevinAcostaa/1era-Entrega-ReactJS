import { Link } from "react-router-dom";

const Error404 = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2><b>Error -404-</b></h2>
                    <p>La página que buscas no existe</p>
                    <p><Link to={"/"} className="btn bg-danger text-white"> Toca para volver a la página de inicio</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;