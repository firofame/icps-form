import React from "react";

export default function CheckBox({ label, checked, onChange }) {
  return (
    <div className="col text-center border">
      <input
        className="mr-1"
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      {label}
    </div>
  );
}
