function Button({
  children,
  variant = "primary",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8
        py-4
        rounded-xl
        font-semibold
        transition

        ${
          variant === "outline"
            ? "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            : "bg-cyan-400 text-black hover:bg-cyan-300"
        }
      `}
    >
      {children}
    </button>
  );
}

export default Button;