import { newUserActionType } from "../ActionTypes/NewUserType";
import { userActionDelete } from "../ActionTypes/NewUserType";

export const userAction1 = (payload, dispatch) => { 

    dispatch({
        type: newUserActionType,
        payload: payload,
    })

};

export const deleteUserAction = (payload, dispatch, index) => {

    payload.splice(index, 1);
    let newArray = [...payload];
    dispatch({
        type: userActionDelete,
        payload:newArray,
    });
}

