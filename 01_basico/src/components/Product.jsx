import React from 'react'

const Product = ({ product }) => {
    
    const { name, price, id}=product
    return (
        <div>
            <h1>{ name }</h1>
            <h1>{ price }</h1>
            <h1>{ id }</h1>
        </div>
    )
}

export default Product
