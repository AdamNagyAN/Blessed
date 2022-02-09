import * as actionTypes from './fav-types'

const INITIAL_STATE = {
    favs: [],
}

const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FAV:
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }
        default:
            return state;
    }
}

export default favReducer;
