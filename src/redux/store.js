import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from "redux-persist";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export const persistor = persistStore(store);

const obj = { store, persistor };

export default obj;