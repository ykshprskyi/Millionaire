import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";
import { IState } from "../constants/constants";

export const initialState: IState = {
  questions: [],
  score: { questionInd: 0, points: "0" },
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));
export default store;
