import React, { useState } from 'react';

const ShoppingList = ({ items }) => {
  // State to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handler to update state when <select> changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h1>Shopping List</h1>

      {/* Select element for filtering */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        {/* Dynamically generate unique categories from the items */}
        {[...new Set(items.map((item) => item.category))].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Render the filtered list of items */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
