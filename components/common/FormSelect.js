function FormSelect({ options, label, onSelectChange }) {
  return (
    <div className="">
      <label className="mb-8">{label}</label>
      <select
        className="w-full mt-2 border border-2-black p-2 py-[10px] !bg-white outline-none rounded-md flex items-center"
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
