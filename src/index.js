import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./routes";

// ########### FOR DEBUGGING PURPOSES ##################
import { getBeaconsRequest, getBeaconsSuccess, getBeaconsFailure, createBeaconRequest, createBeaconSuccess, createBeaconsFailure } from "./actions/beaconsActions";
import { setMessage, removeMessage } from "./actions/messagesActions";
import { getKMeansDataRequest } from "./actions/algorithmsActions";

import { getChairsRequest, getChairsSuccess, getChairsFailure } from "./actions/chairsActions";

window.store = store;
window.getBeaconsRequest = getBeaconsRequest;
window.getBeaconsSuccess = getBeaconsSuccess;
window.getBeaconsFailure = getBeaconsFailure;

window.getChairsRequest = getChairsRequest;
window.getChairsSuccess = getChairsSuccess;
window.getChairsFailure = getChairsFailure;

window.getKMeansDataRequest = getKMeansDataRequest;

window.setMessage = setMessage;
window.removeMessage = removeMessage;
// ########### FOR DEBUGGING PURPOSES ##################

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
