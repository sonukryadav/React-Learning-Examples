import React, { useState } from 'react';
import { userAction1 } from './Actions/userAction1';
import { useDispatch } from 'react-redux';
import ShowUsers from './ShowUsers';
import { Show } from '@chakra-ui/react';

export default function NewUser() {
  const [name, setName] = useState('');

  const addusers = (e) => {
    e.preventDefault();
    userAction1(name, dispatch);
  }
  
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={(e) => { addusers(e) }}>
              <label>Enter new user : </label>
        <input style={{border:'2px solid green', padding:'3px'}} type='text' name='name' value={name} placeholder='username...' onChange={(e) => { setName(e.target.value) }}></input>
              <br /><br/>
        <input style={{padding:'2px 8px', border:'1px solid blue', cursor:'pointer'}} type='submit' value='Submit'/>
      </form>
      
      <div style={{ backgroundColor:'lightgreen', color: 'black', margin:'10px 10px',padding:'20px' }}>
        <ShowUsers />
      </div>
    </div>
  )
}
