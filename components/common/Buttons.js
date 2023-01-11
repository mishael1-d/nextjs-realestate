import Loader from "./Loader";

function Buttons({ label, variant, size, loading, type, style }) {
  return (
    <button
      type={type}
      className={`${variant === "primary" ? "bg-[#263C41] text-white" : null} ${
        size === "large" ? "w-full" : null
      } ${style ? style : null} py-2 px-4 rounded-md`}
    >
      {loading ? <Loader /> : label}
    </button>
  );
}

export default Buttons;
