function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 bg-[#07141A]" />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-32
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.25,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

export default Background;