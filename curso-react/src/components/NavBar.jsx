import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import banner from "../assets/adidas-banner.jpg";



const NavBar = () => {
    return (
        <>

        
                <div className="container-fluid d-inline-flex p-0">
                    <Link to={""}>
                        <img className="w-100 img-fluid" src={banner} alt="ADIDAS-NEGRO"/>
                    </Link>
                </div>

            <nav className="navbar navbar-expand-lg bg-secondary-subtle">
                    

                <div className="container-fluid ">
                    
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to={"/"}>INICIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to={"/category/camperas"}>CAMPERAS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to={"/category/calzado"}>CALZADO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to={"/category/remeras"}>REMERAS</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end p-2"> 
                    < CartWidget/>
                    </div>
                    
                </div>
            </nav>
        </>
    );
};

export default NavBar;
