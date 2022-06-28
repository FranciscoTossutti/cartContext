import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import jbl from '../imagenes/jbl.png';
import jbl4 from '../imagenes/jbl4.png';
import jbP from '../imagenes/jblP.png';
import { useParams } from 'react-router-dom';

const productos = [
    {
        id : 1,
        img : jbl,
        titulo : "Jbl Charge",
        precio : 22.99,
        categoria : "Auriculares",
    },
    {
        id : 2,
        img : jbl4,
        titulo : "Jbl Charge2",
        precio : 18.99,
        categoria : "Parlantes"
    },
    {
        id : 3,
        img : jbP,
        titulo : "Jbl Charge3",
        precio : 35.99,
        categoria : "Parlantes"
    },
];


const ItemDetailConteiner = () => {

    const [data, setData ] = useState({});

    const { DetalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });

        getData.then(res => setData(res.find(producto => producto.id === parseInt(DetalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailConteiner;