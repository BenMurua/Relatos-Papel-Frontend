import "./QuantitySelector.css";

function QuantitySelector({ quantity, handleQuantityChange }) {
  const onIncrease = () => {
    handleQuantityChange(quantity + 1);
  };

  const onDecrease = () => {
    if (quantity > 0) {
      handleQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      handleQuantityChange(value);
    } else if (e.target.value === "") {
      handleQuantityChange(0);
    }
  };

  return (
    <div className="qty">
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
        className="qty__button qty__button--decrease"
        aria-label="Reducir cantidad"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min="0"
        className="qty__input"
        aria-label="Cantidad"
      />
      <button
        onClick={onIncrease}
        className="qty__button qty__button--increase"
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
