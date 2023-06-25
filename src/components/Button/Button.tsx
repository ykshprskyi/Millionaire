import "./Button.scss";

interface Buttonprops {
  btnText: string;
  navigateTo: () => void;
}

export const Button = ({ btnText, navigateTo }: Buttonprops) => {
  return (
    <button className="button" onClick={navigateTo}>
      {btnText}
    </button>
  );
};
