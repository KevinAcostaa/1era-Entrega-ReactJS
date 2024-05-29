import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";


    // Ejemplo de cargar productos vía JSON
    // useEffect(()=>{
    //     const Promesa = new Promise(resolve =>{
    //         setTimeout(() => {
    //             resolve(arrayProductos.filter(item => item.precio > 4000));
    //         }, 2000);
    //     });
    //     Promesa.then(respuesta=>{
    //         setCarrito(respuesta);
    //     })
    // }, []);

    // Carga de productos vía Firestore
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const productosCollection = collection(db, "items");
    //     getDocs(productosCollection).then(snapShot=>{
    //         if(snapShot.size > 0){
    //             setCarrito(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
    //         }
    //     });
    // }, []);




        // Ejemplo de función para agregar un nuevo documento al Firestore
        // const db = getFirestore();
        // const ordersCollection = collection(db, "orders");
        // addDoc(ordersCollection, order).then(data =>{
        //     setOrderid(data.id);
        // });

        // Ejemplo para cargar los productos a la base de datos
        // const db = getFirestore();
        // const productosCollection = collection(db, "items");
        // arrayProductos.forEach(productos =>{
        //     addDoc(productosCollection, productos);
        // });
        // console.log("Productos cargados correctamente a la base de datos");


const Checkout = () => {
    const {cart, clear, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("")

    const generarOrden = () => {
        if (nombre == "") {
            
            return false;
        } else if (email == "") {
            
            return false;
        } else if (telefono == "") {
            
            return false;
        }

        const buyer = {nombre:nombre, email:email, telephone:telefono};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};
        
        // Para agregar un nuevo Documento a la Colección Orders en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });
    }

    if (getCountProducts() == 0 && !orderId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            {!orderId ? 
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>x{item.quantity}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> : "" }
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Gracias por preferirnos!! Su ID de compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;