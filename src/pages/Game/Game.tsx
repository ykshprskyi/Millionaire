import "./Game.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState, Iquestion, Iscore, MyAction } from "../../constants/constants";
import { fetchQuestions, updateScore } from "../../actions/actions";
import { Price } from "../../components/Price/Price";
import { Answer } from "../../components/Answer/Answer";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";

export const Game = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(false);
  const dispatch: ThunkDispatch<IState, "", MyAction> = useDispatch();
  const navigate = useNavigate();
  const navigateTo = (path: string): void => navigate(path);
  const delay = 1500;
  useEffect(() => {
    dispatch(fetchQuestions());

    if (isOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [dispatch, isOpen]);

  const questions: Array<Iquestion> = useSelector(
    (state: IState) => state.questions
  );
  questions.sort((q, q1) => q.id - q1.id);

  const score: Iscore = useSelector((state: IState) => state.score);

  const openClickHandler = (e) => {
    e.stopPropagation();
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const answerHandler = (ans, index) => {
    setLocked(true);

    const toggleCorrectClass = () => {
      document.getElementById("answer-" + index).classList.toggle("correct");
    };

    const toggleIncorrectClass = () => {
      document.getElementById("answer-" + index).classList.toggle("incorrect");
    };

    const handleCorrectAnswer = () => {
      toggleCorrectClass();
      setTimeout(() => {
        if (score.questionInd === questions.length - 1) {
          dispatch(
            updateScore(score.questionInd, questions[score.questionInd].price)
          );
          navigateTo("/result");
        } else {
          toggleCorrectClass();
          dispatch(
            updateScore(
              score.questionInd + 1,
              questions[score.questionInd].price
            )
          );
        }
        setLocked(false);
      }, delay);
    };

    const handleIncorrectAnswer = () => {
      toggleIncorrectClass();
      setTimeout(() => {
        toggleIncorrectClass();
        navigateTo("/result");
        setLocked(false);
      }, delay);
    };

    if (ans.correct === true) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
  };

  return (
    <div className="game">
      <div className="game_menu">
        <div
          onClick={openClickHandler}
          className={`game_menu__btn ${isOpen ? "is-open" : ``}`}
        >
          <span className="btn_bar"></span>
        </div>
        <div className={`game_menu__list ${isOpen ? "active" : ``}`}>
          {questions.map((el, index) => {
            return (
              <Price
                key={"price" + el.id}
                price={el.price}
                type={`${
                  index < score.questionInd
                    ? "inactive"
                    : index === score.questionInd
                    ? "active"
                    : ""
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className="game_screen">
        {questions.length > 0 ? (
          <div className="game_screen__question">
            {questions[score.questionInd].question}
          </div>
        ) : (
          <></>
        )}

        {questions.length > 0 ? (
          <div className="game_screen__answers">
            {questions[score.questionInd].answers.map((ans, index) => {
              return (
                <div
                  key={ans.text + index}
                  id={"answer-" + index}
                  style={{ pointerEvents: locked ? "none" : "auto" }}
                  className="answer_item"
                  onClick={() => answerHandler(ans, index)}
                >
                  <Answer text={ans.text} />
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
