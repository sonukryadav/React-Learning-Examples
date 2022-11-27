

let initialData = {
    users: [],
}

const userReducer1 = (storeData = initialData, action) => {
    switch (action.type) {
        case "USERS": {
           return {
                ...storeData, users: [...storeData.users, action.payload],
            }
        }
        case "Delete": {
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