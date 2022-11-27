import { proctuctJeweleryActionType, productElectronicActionType } from "../ActionTypes/NewUserType";

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