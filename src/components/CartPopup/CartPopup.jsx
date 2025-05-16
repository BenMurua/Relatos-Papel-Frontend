import "./CartPopup.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookCardContext } from "../../context/bookCardContext";

const CartPopup = ({ handleDelete, handleCartToggle }) => {
  const { bookList } = useContext(BookCardContext);
  const navigate = useNavigate();

  const totalCost = bookList.reduce(
    (total, book) => total + book.quantity * book.price,
    0
  );

  return (
    <div className="cart-dropdown">
      <h3 className="cart-dropdown__h3">Carrito</h3>
      {bookList.length === 0 ? (
        <p className="cart-dropdown__p">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-dropdown__ul">
            {bookList.map((book) => (
              <li className="cart-dropdown__li" key={book.id}>
                {book.title} - Cantidad: {book.quantity}
                <br />
                {book.quantity} × {book.price} € ={" "}
                {(book.quantity * book.price).toFixed(2)} €
                <button
                  className="cart-dropdown__li__button"
                  onClick={() => handleDelete(book.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-dropdown__p">
            <strong>Total: {totalCost.toFixed(2)} €</strong>
          </p>
          <button
            className="button__popup"
            onClick={() => {
              handleCartToggle(false);
              navigate("/app/cart");
            }}
          >
            Ir al carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CartPopup;
