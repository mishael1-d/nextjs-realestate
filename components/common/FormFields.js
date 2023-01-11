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
      <label className="mb-8">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeFunction(e)}
        className="w-full border mt-2 border-2-[#263C41] p-2 !bg-white outline-none rounded-md"
      />
    </div>
  );
}

export default FormFields;
