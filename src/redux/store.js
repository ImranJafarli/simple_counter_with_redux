import { counterReducer } from "./reducers/counter.reducer";
import { createStore, combineReducers } from "redux";

const allReducers = combineReducers({
  countData: counterReducer,
});

export const store = createStore(allReducers);
