function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const base =
    "rounded-xl px-7 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-cyan-400 text-black hover:bg-cyan-300",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;