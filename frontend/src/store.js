import { legacy_createStore as createStore} from 'redux'
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from './reducers/productReducer';
import { forgotPasswordReducer, profileReducer, userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;



















// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { productReducer } from './reducers/productReducer';

// const reducer = combineReducers({
//     products: productReducer
// });

// let initialState = {};

// const middleware = [thunk];

// const store = configureStore({
//     reducer: reducer,
//     preloadedState: initialState,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
//     devTools: composeWithDevTools()
// });

// export default store;