import CartItem from "../CartItem/CartItem";
import "./CartItemList.css";

function CartItemsList({ items, onQuantityChange, onRemoveItem }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="cart-items-list" aria-label="Artículos en el carrito">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </section>
  );
}

export default CartItemsList;
