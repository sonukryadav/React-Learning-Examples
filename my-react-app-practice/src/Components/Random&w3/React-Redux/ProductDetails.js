import React from 'react';
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

const ProductDetails = (cat) => {
    const { id } = useParams();
    const data = useSelector((d) => { return d.productReducer.electronic });
    const data3 = useSelector((d) => { return d.productReducer.jewelery });
    const dataid = data.filter((d) => {
        if (d.id === Number(id)) {
            return d;
        }
        return 0;
    })
    const data3id = data3.filter((d) => {
        if (d.id === Number(id)) {
            return d;
        }
        return 0;
    })
    console.log(dataid)
  return (
    <div>
            <h2>product details {id}</h2>
            {dataid.map((d) => {
                return (
                    <div >
                        <img src={d.image} height='200' width='200' alt='pic' />
                        <h2>$ {d.price}</h2>
                        <h3>{d.title}</h3>
                        <p>{ d.description}</p>
                    </div>
                )
            })}
            {data3id.map((d) => {
                return (
                    <div >
                        <img src={d.image} height='200' width='200' alt='pic' />
                        <h2>$ {d.price}</h2>
                        <h3>{d.title}</h3>
                        <p>{d.description}</p>
                    </div>
                )
            })}
    </div>
  )
}

export default ProductDetails
