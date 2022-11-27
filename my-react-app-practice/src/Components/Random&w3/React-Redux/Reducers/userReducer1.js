import { newUserActionType } from "../ActionTypes/NewUserType";
import { userActionDelete } from "../ActionTypes/NewUserType";

let initialData = {
    users: [],
}

const userReducer1 = (storeData = initialData, action) => {
    switch (action.type) {
        case newUserActionType: {
           return {
                ...storeData, users: [...storeData.users, action.payload],
            }
        }
        case userActionDelete: {
            return {
                ...storeData, users: action.payload,
            };
        }
        default: {
            return storeData;
        }
        
    }

};

export default userReducer1;