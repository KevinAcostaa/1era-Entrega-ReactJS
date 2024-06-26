import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {

        const [item, setItem] = useState([]);
        const [visible, setVisible] = useState(true);
        const {id} = useParams();

        // Acceso a un Producto por ID en Firestore
        useEffect(() => {
            const db = getFirestore();
            const docRef = doc(db, "items", id);
            getDoc(docRef).then(snapShot => {
                if (snapShot.exists()) {
                    setItem({id:snapShot.id, ...snapShot.data()});
                    setVisible(false);
                }
            });
        }, [id]);

        return (
            <div className="container">
                <div className="row my-5">
                    {visible ? <Loading /> : <ItemDetail item={item} />}
                </div>
            </div>
        )
    }
    
    export default ItemDetailContainer;


// Código viejo comentado para ejemplo con JSON

    // const [item, setItem] = useState([]);
    // const {id} = useParams ();
    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             const producto = arrayProductos.find(item => item.id === parseInt(id));
    //             resolve(producto);
    //         }, 2000)
    //     });
        
    //     promesa.then(respuesta => {
    //         setItem(respuesta);
    //     })
    // }, [id])

