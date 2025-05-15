import CartItem from "../CartItem/CartItem";
import "./CartItemList.css";

function CartItemsList({ items, onBookUpdate, onRemoveItem }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="cart-items" aria-label="Artículos en el carrito">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onBookUpdate={onBookUpdate}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </section>
  );
}

export default CartItemsList;
