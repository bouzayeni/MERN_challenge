import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import userReducer from "./Reducers/userReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers ({user: userReducer})
export default createStore(rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
