

let initialData = {
    name: [],
}

const userReducer1 = (storeData = initialData, action) => {
    switch (action.type) {
        case "USERS": {
           return {
                ...storeData,user: [...storeData.users, action.payload],
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