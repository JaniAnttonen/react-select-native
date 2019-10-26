import React, { useState, useEffect } from "react";

/**
 * Extends HTML select so that it can better handle asynchronically loaded data.
 */
export default props => {
  const [selected, setSelected] = useState(props.value || props.defaultValue);
  return (
    <select
      className={`react-select-native mobile-dropdown${
        props.className ? " " + props.className : ""
      }`}
      id={props.id}
      ref={props.getRef}
      value={selected}
      onChange={e => {
        e.preventDefault();
        props.onChange && props.onChange(e);
        setSelected(e.target.value);
      }}
    >
      {props.unselected && (
        <option value={props.unselected.value}>{props.unselected.label}</option>
      )}
      {props.options &&
        props.options.map((option, index) => (
          <option
            key={`react-select-native-option${index}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
    </select>
  );
};
