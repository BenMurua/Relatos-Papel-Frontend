import CartItemsList from "../../components/CartItemList/CartItemList";
import OrderResume from "../../components/OrderResume/OrderResume";
import { getAllBooks } from "../../utils/BookUtils";
import { useState, useContext } from "react";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues.js";
import "./CartDetail.css";

function CartDetail() {
  const title = "Resumen del carrito";
  const navigate = useNavigate();
  const { bookList, updatedBookList, deleteBook } = useContext(BookCardContext);

  const booksData = getAllBooks();

  const books = bookList
    .map(({ id, quantity }) => {
      const bookUpdated = booksData.find((book) => book.id === id);
      return bookUpdated ? { ...bookUpdated, quantity } : null;
    })
    .filter(Boolean);

  const [bookListState, setBookListState] = useState(books);

  const handleConfirmPayment = () => {
    navigate(RoutesValues.checkout);
  };

  const onBookUpdate = (book) => {
    const bookList = bookListState
      .map((item) => {
        if (item.id === book.id) {
          return { ...item, quantity: book.quantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setBookListState(bookList);
    updatedBookList(bookList);
  };

  const onRemoveitem = (id) => {
    const updatedBookList = bookListState.filter((item) => item.id !== id);
    deleteBook(id);
    setBookListState(updatedBookList);
  };

  return (
    <div className="shopping-cart-container">
      <h1>{title}</h1>
      <div className="cart-layout">
        <CartItemsList
          items={bookListState}
          onBookUpdate={onBookUpdate}
          onRemoveItem={onRemoveitem}
        />
        {bookListState.length > 0 && (
          <OrderResume
            items={bookListState}
            onConfirmPayment={handleConfirmPayment}
          />
        )}
      </div>
      {bookListState.length === 0 && <p>Tu carrito está vacío.</p>}
    </div>
  );
}

export default CartDetail;
