function FormSelect({ options, label, onSelectChange }) {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <select
        className="w-full  border border-2-black p-2 py-3 !bg-white outline-none rounded-md flex items-center"
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
