import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../faker";

export default function ProductDetails() {
    const [currentProduct, setCurrentProduct] = React.useState(null)
    let { id } = useParams();


    let current = products.filter(product => product.userId == id)
    console.log(current);
    
    // React.useEffect(() => {
    //     setCurrentProduct()
    // }, [id])
console.log(id);

    console.log(currentProduct)
    return (
        <h1>{currentProduct}</h1>
    )
}