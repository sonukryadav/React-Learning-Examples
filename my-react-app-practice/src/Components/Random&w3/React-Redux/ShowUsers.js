import React from 'react';
import { useSelector } from 'react-redux';

const ShowUsers = () => {

  const data = useSelector((storedData)=>storedData.users);
  return (
      <div>
        {
        data.map((d, id) => {
            return <p key={id}>{d}</p>
        })
        }
      
    </div>
  )
}

export default ShowUsers
