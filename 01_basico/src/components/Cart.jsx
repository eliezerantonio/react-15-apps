import React from 'react'
import styles from './cart.module.css'
import Product from './Product'
const Cart = ({cart, setCart}) => 
     (
    <div className={ styles.cart}>
        <h2>Carrinho de compras</h2>
        {
            cart.length === 0 ?
                <p>Sem produtos no carrinho</p> :
                cart.map(product => (<Product key={product.id} product={product} cart={cart} setCart={setCart} />))
        
        //
        }

        </div>
    )


export default Cart
