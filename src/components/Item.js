import React, { useState } from "react";

const Item = ({ name, category }) => {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle inCart state
  const toggleCartStatus = () => {
    setInCart((prevState) => !prevState);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name} ({category})</span>
      <button onClick={toggleCartStatus}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
