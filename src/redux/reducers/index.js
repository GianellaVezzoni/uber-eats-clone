import {combineReducers} from 'redux';
import cartReducers from "./cartReducer";

let reducers = combineReducers({
  cartReducers: cartReducers,
})

const rootReducers = (state, action) => {
  const store = reducers(state, action);
  return store;
}

export default rootReducers;