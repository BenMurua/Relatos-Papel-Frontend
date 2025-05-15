import React from "react";
import "./FilterCheckBox.css";

const FilterCheckBox = ({ authors, selectedAuthors, onChange }) => (
  <div className="filter-checkbox">
    <span className="filter-checkbox__title">Filtrar por autor</span>
    <ul className="filter-checkbox__list">
      {authors.map((author) => (
        <li key={author}>
          <label className="filter-checkbox__label">
            <input
              type="checkbox"
              checked={selectedAuthors.includes(author)}
              onChange={() => onChange(author)}
            />
            <span>{author}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default FilterCheckBox;
