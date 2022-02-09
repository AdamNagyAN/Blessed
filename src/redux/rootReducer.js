import { combineReducers } from "redux";
import shopReducer from './Cart/cart-reducer'
import favReducer from './Favourites/fav-reducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shop']
}


const rootReducer = combineReducers({
    shop: shopReducer,
    fav: favReducer
});

export default persistReducer(persistConfig, rootReducer);