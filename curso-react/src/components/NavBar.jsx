import CartWidge from "./CartWidget";
import banner from "../assets/adidas-banner.jpg";



const NavBar = () => {
    return (
        <>

        
                <div className="container-fluid d-inline-flex p-0">
                    <a href="#">
                        <img className="w-100 img-fluid" src={banner} alt="ADIDAS-NEGRO"/>
                    </a>
                </div>

            <nav className="navbar navbar-expand-lg bg-secondary-subtle">
                    

                <div className="container-fluid ">
                    
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link text-black"href="#">INDUMENTARÍA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">CALZADO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">ACCESORIOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="d-flex justify-content-end"> 
                    < CartWidge/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
