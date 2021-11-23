import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReduser";
import { customerReducer } from "./customerReduser";
// import { loginReducer } from "./loginReduser";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    // loginReducer,
}) 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))