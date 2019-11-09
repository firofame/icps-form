import React, { useState } from "react";

export default function EditableCell({
  cellInfo,
  qualificationsData,
  setqualificationsData
}) {
  const {
    row,
    column: { id },
    cell: { value: initialValue }
  } = cellInfo;
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setqualificationsData(
      qualificationsData.map((item, index) => {
        if (row.index === index) {
          return { ...item, [id]: value };
        }
        return item;
      })
    );
  };
  return <input value={value} onChange={onChange} onBlur={onBlur} />;
}
