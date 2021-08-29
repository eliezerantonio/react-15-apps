import React from 'react'

const Product = ({ product,cart, setCart, products }) => {
    
    const { name, price, id } = product;

    const selectProduct = id => {

        const product = products.filter(product =>product.id===id)[0];
        setCart([...cart, product]);

     
    }
    return (
        <div>
            <h1>{ name }</h1>
            <p>${price}</p>
            <button type="button" onClick={()=> selectProduct(id)}> Comprar</button>
        </div>
    )
}

export default Product
