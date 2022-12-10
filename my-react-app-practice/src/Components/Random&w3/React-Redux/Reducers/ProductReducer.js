import { Switch } from '@chakra-ui/react';
import React, { memo } from 'react';
import { proctuctJeweleryActionType, productElectronicActionType, addtocart } from '../ActionTypes/NewUserType';


var initialData = {
    electronic: [],
    jewelery: [],
    mensWearing: [],
    womensWearing: [],
    cart: []
};

const productReducer = (data = initialData, action) => {
    switch (action.type) {
        case productElectronicActionType: {
            return {
                ...data,
                electronic: action.payload,
            }
        }
        case proctuctJeweleryActionType: {
            return {
                ...data,
                jewelery: action.payload,
            }
        }
        case addtocart: {
            return {
                ...data,
                cart: action.payload,
            }
        }
        default: {
            return data;
        }
    }
}

export default productReducer;
