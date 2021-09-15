import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

let restro;
try {
    restro = createStore(
        rootReducer, 
        initialState, 
        compose(applyMiddleware(...middleware))
    );
} catch (error) {
    restro = createStore(
        rootReducer, 
        initialState, 
        compose(applyMiddleware(...middleware))
    );
}

export default restro;