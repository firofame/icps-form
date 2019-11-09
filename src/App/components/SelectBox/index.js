import React from "react";

export default function SelectBox({ label, value, onChange }) {
  return (
    <div className="col text-center border">
      {label}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="ml-2"
      >
        <option value="">Select District</option>
        <option value="Alappuzha">Alappuzha</option>
        <option value="Ernakulam">Ernakulam</option>
        <option value="Idukki">Idukki</option>
        <option value="Kannur">Kannur</option>
        <option value="Kasaragod">Kasaragod</option>
        <option value="Kollam">Kollam</option>
        <option value="Kottayam">Kottayam</option>
        <option value="Kozhikode">Kozhikode</option>
        <option value="Malappuram">Malappuram</option>
        <option value="Palakkad">Palakkad</option>
        <option value="Pathanamthitta">Pathanamthitta</option>
        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Wayanad">Wayanad</option>
      </select>
    </div>
  );
}
