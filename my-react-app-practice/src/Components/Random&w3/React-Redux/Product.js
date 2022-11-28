import React, { useEffect, memo } from 'react';
import { electronicAction, jewelryAction } from './Actions/ProductPageActions';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {

  const dispatch = useDispatch();

  const electronicDataReducStore = useSelector((storeData) => {
    return storeData.productReducer.electronic;
  })

  const jeweleryDataReducStore = useSelector((storeData) => {
    return storeData.productReducer.jewelery;
  })

  useEffect(() => {
  
    if (electronicDataReducStore.length === 0) {
      dataElectronics();
    }
    if (jeweleryDataReducStore.length === 0) {
      dataJewelery();
    }
   
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




  return (
    <div>
      <Outlet/>
      <h1 style={{fontSize:'35px'}}>Electronics</h1>
      <div style={{display:'grid', gridTemplateColumns : 'repeat(3, 1fr)',gap:'10px 20px'}}>
      {electronicDataReducStore.map((d,id) => {
        return (
              <NavLink to={`${d.id}`} key={id}>
                <div >
                  <img src={d.image} height='200' width='200'  alt='pic'/>
                  <h2>$ { d.price}</h2>
                  <h3>{ d.title}</h3>
                </div>
              </NavLink>
                )
            })}
      </div>

      <h1 style={{ fontSize: '35px' }}>Jewelery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
        {jeweleryDataReducStore.map((d, id) => {
          return (
            <NavLink to={`${d.id}`} key={id}>
            <div >
              <img src={d.image} height='200' width='200' alt='pic' />
              <h2>$ {d.price}</h2>
              <h3>{d.title}</h3>
            </div>
            </NavLink>
            )
        })}
      </div>
      
    </div>
  )
}

export default memo(Product);
