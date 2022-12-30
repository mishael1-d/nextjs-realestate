function FormFields({
  label,
  type,
  placeholder,
  value,
  onChangeFunction,
  name,
}) {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeFunction(e)}
        className="w-full  border border-2-black p-2 !bg-white outline-none rounded-md"
      />
    </div>
  );
}

export default FormFields;
