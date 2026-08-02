function CircleDot({
  className = "",
  size = "h-5 w-5",
}) {
  return (
    <div
      className={`
        absolute
        ${size}
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_8px_rgba(34,211,238,.45)]
        ${className}
      `}
    />
  );
}

export default CircleDot;