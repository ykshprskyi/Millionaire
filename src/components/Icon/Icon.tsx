import "./Icon.scss";
interface IconProps {
  iconName: string;
}

export const Icon = ({ iconName }: IconProps) => {
  const iconsrc: string = require(`../../assets/images/${iconName}.svg`);
  return (
    <img
      className={`icon ${iconName}`}
      src={iconsrc}
      alt={iconName + " icon"}
    />
  );
};
