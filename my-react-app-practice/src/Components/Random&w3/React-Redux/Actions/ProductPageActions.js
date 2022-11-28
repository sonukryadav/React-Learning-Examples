import {
    proctuctJeweleryActionType,
    productElectronicActionType,
    addtocart,
} from "../ActionTypes/NewUserType";

export const electronicAction = (payload, dispatch) => {

    dispatch({
        type: productElectronicActionType,
        payload: payload,
    });
}

export const jewelryAction = (payload, dispatch) => {

    dispatch({
        type: proctuctJeweleryActionType,
        payload: payload,
    });
}

export const AddToCart = (payload, dispatch) => {

    dispatch({
        type: addtocart,
        payload: payload,
    })
}