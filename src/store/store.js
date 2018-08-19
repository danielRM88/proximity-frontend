import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import beaconsMiddleware from '../middleware/beaconsMiddleware';
import chairsMiddleware from '../middleware/chairsMiddleware';

const store = createStore(rootReducer, {}, applyMiddleware(beaconsMiddleware, chairsMiddleware));
export default store;