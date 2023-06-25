import {
  SET_QUESTIONS,
  SET_QUESTIONS_FAILURE,
  SET_SCORE,
  UPDATE_SCORE,
} from "../constants/constants";
import { initialState } from "../store/store";

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SCORE:
      if (sessionStorage.getItem("score") === null) {
        return {
          ...state,
        };
      } else {
        const score = JSON.parse(sessionStorage.getItem("score"));
        return {
          ...state,
          score: score,
        };
      }
    case UPDATE_SCORE:
      sessionStorage.setItem("score", JSON.stringify(action.payload));
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};
export default questionsReducer;
