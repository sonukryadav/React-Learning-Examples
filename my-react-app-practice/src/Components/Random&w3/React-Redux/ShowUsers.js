import React, { memo} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteUserAction } from './Actions/userAction1';

const ShowUsers = () => {

    const data = useSelector((storedData) => storedData.userReducer1.users);
    const dispatch = useDispatch();

    const deleteUser = (index) => {
        deleteUserAction(data, dispatch, index);
    }

  return (
      <div>
            {data.length > 0 ? <div>
                <table style={{margin:'auto',width:'300px'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, id) => {
                            return (
                                <tr key={id}>
                                    <td>{d}</td>
                                    <td><button onClick={() => {deleteUser(id)}} style={{border:'1px solid black'}}>DELETE</button></td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>:<div><h2>No data added.</h2></div>}
    </div>
  )
}

export default memo(ShowUsers);
