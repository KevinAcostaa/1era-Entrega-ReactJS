import { Link } from "react-router-dom"
import bannerRopa from "../assets/ropa-banner.webp";
import bannerCalzado from "../assets/calzado-banner.webp";
import remeraBanner from "../assets/remera-banner.webp";

const Banner = () =>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerRopa})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/camperas"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Camperas</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerCalzado})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/calzado"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Calzado</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${remeraBanner})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/remeras"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Remeras</span>
                    </Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Banner;