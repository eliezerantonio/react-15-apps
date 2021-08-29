import React from 'react'

const Product = ({ product,cart, setCart, products }) => {
    
    const { name, price, id } = product;

    const selectProduct = id => {

        const product = products.filter(product =>product.id===id)[0];
        setCart([...cart, product]);

     
    }

    const deleteProduct = id => {
        const products = cart.filter(product => product.id !== id);
        setCart(products)
    }
    return (
        <div>
            <h1>{ name }</h1>
            <p>${price}</p>
            {products ? <button type="button" onClick={() => selectProduct(id)}> Comprar</button>  :   <button type="button" onClick={() => deleteProduct(id)}> Eliminar</button>
       }
        </div>
    )
}

export default Product
