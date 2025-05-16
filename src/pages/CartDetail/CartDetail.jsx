import CartItemsList from "../../components/CartItemList/CartItemList";
import OrderResume from "../../components/OrderResume/OrderResume";
import { getAllBooks } from "../../utils/BookUtils";
import { useContext } from "react";
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

  const handleConfirmPayment = () => {
    navigate(RoutesValues.app + "/" + RoutesValues.checkout);
  };

  const onBookUpdate = (book) => {
    const bookList = books
      .map((item) => {
        if (item.id === book.id) {
          return { ...item, quantity: book.quantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    updatedBookList(bookList);
  };

  const onRemoveitem = (id) => {
    deleteBook(id);
  };

  return (
    <div className="cart-detail">
      <h1>{title}</h1>
      <div className="cart-detail__layout">
        <CartItemsList
          items={books}
          onBookUpdate={onBookUpdate}
          onRemoveItem={onRemoveitem}
        />
        {books.length > 0 && (
          <OrderResume items={books} onConfirmPayment={handleConfirmPayment} />
        )}
      </div>
      {books.length === 0 && <p>Tu carrito está vacío.</p>}
    </div>
  );
}

export default CartDetail;
