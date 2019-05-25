import { createStore, combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar-reduser";
import questionCardReducer from "./reducers/questionCard-reduser";

let reducers = combineReducers({   
    sidebar: sidebarReducer,
    survey: questionCardReducer,   
});

let store = createStore(reducers);

export default store;