import * as actionTypes from './cart-types'

const INITIAL_STATE = {
    cart: [],
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Check if item is in cart
            const inCart = state.cart.find(
                cartItem => cartItem.id === action.payload.id
            )
            if (inCart) {
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(cartItem => (cartItem.id === action.payload.id && cartItem.qty + action.payload.qty < 10 && cartItem.qty + action.payload.qty > 0) ? { ...cartItem, qty: cartItem.qty + action.payload.qty } : { ...cartItem })
            }
        default:
            return state;
    }
}

export default shopReducer;