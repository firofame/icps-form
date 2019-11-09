import React from "react";

export default function TextInput({
  longInput,
  label,
  value,
  onChange,
  toUpperCase
}) {
  return (
    <div className="mt-4">
      {`${label}: `}
      <input
        className={`ml-2 ${longInput ? `w-50` : ``}`}
        value={value}
        onChange={({ target: { value } }) => {
          let finalValue = value;
          if (toUpperCase) {
            finalValue = finalValue.toUpperCase();
          }
          onChange(finalValue);
        }}
      />
    </div>
  );
}
