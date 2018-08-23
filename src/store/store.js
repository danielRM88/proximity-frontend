import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import beaconsMiddleware from '../middleware/beaconsMiddleware';
import chairsMiddleware from '../middleware/chairsMiddleware';
import algorithmsMiddleware from '../middleware/algorithmsMiddleware';

const store = createStore(rootReducer, {}, applyMiddleware(beaconsMiddleware, chairsMiddleware, algorithmsMiddleware));
export default store;