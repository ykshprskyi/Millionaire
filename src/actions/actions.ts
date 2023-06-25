import {
  SET_QUESTIONS,
  SET_QUESTIONS_FAILURE,
  SET_SCORE,
  UPDATE_SCORE,
} from "../constants/constants";

export const fetchQuestions = () => {
  return (dispatch) => {
    fetch("questions.json")
      .then((response) => response.json())
      .then((questions) => {
        dispatch({
          type: SET_QUESTIONS,
          payload: questions,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SET_QUESTIONS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const setScore = () => ({
  type: SET_SCORE,
});

export const updateScore = (questionInd, points) => ({
  type: UPDATE_SCORE,
  payload: { questionInd, points },
});
