import "./Home.scss";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const iconName = "hand";
  const navigate = useNavigate();
  const navigateTo = (path: string): void => navigate(path);
  return (
    <div className="home">
      <div className="home_left">
        <div className="home_icon">
          <Icon iconName={iconName} />
        </div>
      </div>
      <div className="home_right">
        <div className="home_title">
          <h1>Who wants to be a millionaire?</h1>
        </div>
        <div className="home_btn">
          <Button btnText="Start" navigateTo={() => navigateTo("game")} />
        </div>
      </div>
    </div>
  );
};
