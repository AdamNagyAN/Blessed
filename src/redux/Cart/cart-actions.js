import * as actionTypes from './cart-types'

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item
    }
}

export const adjustQty = (item, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: item,
            qty: value
        }
    }
};
