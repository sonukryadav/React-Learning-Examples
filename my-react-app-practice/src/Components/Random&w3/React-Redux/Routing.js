import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Product from './Product';
import ReduxWeb from './ReduxWeb';
import Nav from './Nav';
import NewUser from './NewUser';
import ProductDetails from './ProductDetails';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/homeRedux' element={<NewUser />} />
        <Route path='/productRedux' element={<Product />} />
        <Route path='/productRedux/:id' element={<ProductDetails />} />
        <Route path='*' element={<h2>Page not found!!</h2>}/>
      </Routes>
    </div>
  )
}

export default Routing;
