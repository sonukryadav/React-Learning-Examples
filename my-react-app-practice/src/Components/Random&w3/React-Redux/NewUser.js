import React, { useState } from 'react';
import { userAction1 } from './Actions/userAction1';
import { useDispatch } from 'react-redux';

export default function NewUser() {
  const [name, setName] = useState();
  
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={() => { userAction1(name, dispatch)}}>
              <label>Enter new user :</label>
              <input type='text' name='name' value={name} placeholder='username...' onChange={(e) => { setName(e.target.value) }}></input>
              <br /><br/>
              <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}
