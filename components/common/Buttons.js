function Buttons({ label, variant, size, loading, type }) {
  return (
    <button
      type={type}
      className={`${
        variant === "primary" ? "bg-[#263C41] text-white" : null
      } py-2 px-4 rounded-md`}
    >
      {label}
    </button>
  );
}

export default Buttons;
