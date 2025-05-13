import "./BookCard.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const BookCard = ({ bookImage, title, author, price }) => {
  return (
    <div className="book__card">
      <img src={bookImage} className="book__image"></img>

      <h3> {title}</h3>
      <h4> {author}</h4>
      <h4> {price}€ </h4>

      <button className="add__cart"> Add to cart </button>
      <QuantitySelector className="quantity__selector"></QuantitySelector>
    </div>
  );
};

export default BookCard;
