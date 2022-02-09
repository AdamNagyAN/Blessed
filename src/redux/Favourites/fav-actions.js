import * as favActions from './fav-types'

export const toggleFav = (item) => {
    return {
        type: favActions.TOGGLE_FAV,
        payload: item
    }
}
