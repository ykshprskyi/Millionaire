import "./Price.scss";

interface PriceProps {
  price: string;
  type: string;
}

export const Price = ({ price, type }: PriceProps) => {
  return (
    <div className={`price_item ${type}`}>
      <div className="price_item__wrapper">
        <span className="price_item__text">${price}</span>
      </div>
    </div>
  );
};
