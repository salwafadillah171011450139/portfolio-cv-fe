function Badge({ children }) {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      px-5
      py-2
      text-cyan-400
      "
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400" />

      {children}
    </div>
  );
}

export default Badge;