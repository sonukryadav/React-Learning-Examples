import React, { useEffect, memo } from 'react';
import { electronicAction, jewelryAction } from './Actions/ProductPageActions';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dataElectronics();
    dataJewelery();
  },[]);

 const dataElectronics =  () => {
   fetch('https://fakestoreapi.com/products/category/electronics')
     .then(res => res.json())
     .then((json) => electronicAction(json, dispatch));
  };

  const dataJewelery = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then((json) => jewelryAction(json, dispatch));
  };

  const electronicDataReducStore = useSelector((storeData) => {
    return storeData.productReducer.electronic;
  })

  const jeweleryDataReducStore = useSelector((storeData) => {
    return storeData.productReducer.jewelery;
  })


  return (
    <div>
      <h1 style={{fontSize:'35px'}}>Electronics</h1>
      <div style={{display:'grid', gridTemplateColumns : 'repeat(3, 1fr)',gap:'10px 20px'}}>
      {electronicDataReducStore.map((d,id) => {
              return (
                <div key={id}>
                  <img src={d.image} height='200' width='200'  alt='pic'/>
                  <h2>$ { d.price}</h2>
                  <h3>{ d.title}</h3>
                </div>)
            })}
      </div>

      <h1 style={{ fontSize: '35px' }}>Jewelery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
        {jeweleryDataReducStore.map((d, id) => {
          return (
            <div key={id}>
              <img src={d.image} height='200' width='200' alt='pic' />
              <h2>$ {d.price}</h2>
              <h3>{d.title}</h3>
            </div>)
        })}
      </div>
      
    </div>
  )
}

export default memo(Product);
