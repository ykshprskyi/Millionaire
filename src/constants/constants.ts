export interface IState {
  questions: Iquestion[];
  score: Iscore;
}

export interface Iquestion {
  id: number;
  question: string;
  answers: Answer[];
  price: string;
}
export interface Iscore {
  questionInd: number;
  points: string;
}
interface Answer {
  text: string;
  correct: boolean;
}
export type MyAction = {
  type: string;
  payload?: object;
};

export const UPDATE_SCORE = "UPDATE_SCORE";
export const SET_SCORE = "SET_SCORE";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_QUESTIONS_FAILURE = "SET_QUESTIONS_FAILURE";
