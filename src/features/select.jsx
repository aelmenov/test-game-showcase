import React, { useCallback, useState } from 'react';

const DEFAULT_SELECT = 'default';

export const Select = ({
  title,
  values,
  color,
  onChange,
}) => {
  const [selected, setSelected] = useState(DEFAULT_SELECT);

  const handleChange = useCallback((event) => {
    const { value } = event.target;

    setSelected(value);

    onChange(value);
  });

  return (
    <select
      className={`block w-48 px-1 py-1 mr-6 bg-${color}-500 text-${color}-50 shadow-xl shadow-${color}-400 rounded-md`}
      onChange={handleChange}
      defaultValue={selected}
    >
      <option disabled value={DEFAULT_SELECT}>{title}</option>
      {values?.map((x) => (
        <option key={x} value={x}>{x}</option>
      ))}
    </select>
  );
};
