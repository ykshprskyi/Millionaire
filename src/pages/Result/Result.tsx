import { useNavigate } from "react-router-dom";
import "./Result.scss";
import { Icon } from "../../components/Icon/Icon";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { IState, Iscore } from "../../constants/constants";
import { updateScore } from "../../actions/actions";

export const Result = () => {
  const iconName = "hand";
  const navigate = useNavigate();
  const navigateTo = (path: string): void => navigate(path);
  const dispatch = useDispatch();
  const score: Iscore = useSelector((state: IState) => state.score);
  const clickHandler = () => {
    dispatch(updateScore(0, "0"));
  };
  return (
    <div className="result">
      <div className="result_left">
        <div className="result_icon">
          <Icon iconName={iconName} />
        </div>
      </div>
      <div className="result_right">
        <div className="result_text">
          <div className="result_text__title">Total score:</div>
          <h1 className="result_text__score">${score.points} earned</h1>
        </div>
        <div className="result_btn" onClick={() => clickHandler()}>
          <Button btnText="Try again" navigateTo={() => navigateTo("/game")} />
        </div>
      </div>
    </div>
  );
};
