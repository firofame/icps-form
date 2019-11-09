import React from "react";

export default function TextInput({
  longInput,
  label,
  onChange,
  toUpperCase,
  ...remainingProps
}) {
  return (
    <div className="mt-4">
      {`${label}: `}
      <input
        type="text"
        className={`ml-2 mr-4 ${longInput ? `w-50` : ``}`}
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
