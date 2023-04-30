import React from "react";
import { FilterStyle } from "./filter.styled";

const Filter = ({ value, options, onChange }) => {
  return (
    <FilterStyle value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </FilterStyle>
  );
};

export default Filter;