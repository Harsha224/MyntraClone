import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { boysproducts } from "./reducers/updateboysproducts";
import { bagproducts } from "./reducers/updateproductsinbag";

const AllReducers = combineReducers({
  boysdata: boysproducts,
  bagitems: bagproducts,
});

const store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
