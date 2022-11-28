import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

    const data = useSelector((d) => d.productReducer.cart);
  return (
    <div>
        <h2>Added items </h2>
        {
            data.map((d, id) => {
                return (
                    <div key={id}>
                        <img src={d.image} height='100' width='100' alt='pic' />
                        <h2>$ {d.price}</h2>
                        <h3>{d.title}</h3>
                        <button style={{ cursor: 'pointer' }}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart
