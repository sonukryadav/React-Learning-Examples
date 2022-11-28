import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {

    const style = {
        display: 'flex',
        backgroundColor: 'black',
        color: 'lightblue',
        padding: '10px',
        justifyContent: 'space-evenly',
      margin: '10px 0',
        color:'yellow'
    }
  return (
      <div>
        <h1>React Redux</h1>
        <div style={style}>
        <div><NavLink to='/homeRedux' style={{color:'yellow'}}>Home</NavLink></div>
        <div><NavLink to='/productRedux' style={{ color: 'yellow' }}>Products</NavLink></div>
          </div>
          <div><Outlet/></div>
    </div>
  )
}

export default memo(Nav);
