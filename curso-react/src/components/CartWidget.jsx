
import cart2 from "../assets/cart2.svg"

const CartWidget = ()=>{
    return(

        <>
            <button type="button" className="btn btn-light position-relative">
                <img src={cart2} alt="Carrito" width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">99+</span>
            </button>
        </>

    )
}

export default CartWidget;