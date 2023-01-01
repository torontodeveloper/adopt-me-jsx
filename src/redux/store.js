import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from './reducer'

const initialState = {}
const middleware = [thunk]
export const store = createStore(rootReducer, {}, applyMiddleware(...middleware))