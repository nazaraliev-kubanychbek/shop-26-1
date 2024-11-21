import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const CategoryComponent = ({category, limit}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data})=> setProducts(data))
    },[])
    return (
        <div>

        </div>
    );
}

export default CategoryComponent;
