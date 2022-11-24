

export const userAction1 = (data, dispatch) => { 
    
    dispatch({
        type: "USERS",
        payload: data,
    })

};

export const deleteUserAction = (data, dispatch) => {
    dispatch({
        type:"DELETE",
    });
}

