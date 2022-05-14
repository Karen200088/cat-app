import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {boxesReducer} from "./reducers/boxesReducer";
import {clothesReducer} from "./reducers/clothesReducer";
import {hatsReducer} from "./reducers/hatsReducer";
import {sinksReducer} from "./reducers/sinksReducer";
import {spaceReducer} from "./reducers/spaceReducer";
import {sunglassesReducer} from "./reducers/sunglassesReducer";
import {tiesReducer} from "./reducers/tiesReducer";
import {currentPageReducer} from "./reducers/currentPageReducer";

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    boxes: boxesReducer,
    clothes: clothesReducer,
    hats: hatsReducer,
    sinks: sinksReducer,
    space: spaceReducer,
    sunglasses: sunglassesReducer,
    ties: tiesReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
