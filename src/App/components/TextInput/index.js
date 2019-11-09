import React from "react";

export default function TextInput({
  longInput,
  label,
  onChange,
  toUpperCase,
  ...remainingProps
}) {
  return (
    <div className="form-group">
      <label for={label}>{`${label}: `}</label>
      <input
        id={label}
        type="text"
        className="form-control"
        onChange={({ target: { value } }) => {
          let finalValue = value;
          if (toUpperCase) {
            finalValue = finalValue.toUpperCase();
          }
          onChange(finalValue);
        }}
        {...remainingProps}
      />
    </div>
  );
}
