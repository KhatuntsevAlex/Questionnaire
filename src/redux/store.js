import { createStore, combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar-reduser";

let reducers = combineReducers({   
    sidebar: sidebarReducer,    
});

let store = createStore(reducers);

export default store;