import React from "react";
import "./FilterCheckBox.css";

const FilterCheckBox = ({ authors, selectedAuthors, onChange }) => (
  <div className="filter-checkbox-container">
    <span className="filter-title">Filtrar por autor</span>
    <ul className="filter-list">
      {authors.map((author) => (
        <li key={author}>
          <label className="filter-label">
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
