import React from "react";

export default function CheckBox({ label, checked, onChange }) {
  return (
    <div className="form-check form-group">
      <input
        id={label}
        class="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <label className="form-check-label" for={label}>
        {label}
      </label>
    </div>
  );
}
