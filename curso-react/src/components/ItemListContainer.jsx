import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();

    // Accedediendo a una Collection en Firestore por Query
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setVisible(false);
            }
        });
    }, [id]);

    return (
        <>
            <div className="container">
            <div className="row my-5">
                    {visible ? <Loading /> : <ItemList items={items} />}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;



// Código viejo comentado para ejemplo

    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
    //         }, 2000)
    //     });
        
    //     promesa.then(respuesta => {
    //         setItems(respuesta);
    //     })
    // }, [id])

    // useEffect(()=>{
    //     const db = getFirestore();
    //     const productoDoc = doc(db, "items", "A74Z9yzaUKi2VZgXl5UC")
    //     getDoc(productoDoc).then((snapShot => {
    //         if(snapShot.exists()){
    //             setItems({id:snapShot.id, ...snapShot.data()});
    //         }
    //     })); 
    // }, []);

