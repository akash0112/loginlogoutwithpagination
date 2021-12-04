import { combineReducers } from "redux";
import authReducer from "./auth";
import familyReducer from "./familiesreducer";
import locationReducer from "./locationreducer";
import productReducer from "./productsreducer";
import transactionReducer from "./transactionreducer";
const Rootreducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  transactions:transactionReducer,
  families: familyReducer,
  location:locationReducer
});
export default Rootreducer;
