function FloatingCard({
  icon: Icon,
  value,
  label,
  className = "",
}) {
  return (
    <div
  className={`
    absolute
    flex
    items-center
    gap-4

    w-[200px]
    h-[80px]

    rounded-[28px]
    border
    border-cyan-500/20
    bg-[#0B1B22]/95
    backdrop-blur-xl

    px-5
    shadow-xl

    ${className}
  `}
>
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
        "
      >
        <Icon
          size={28}
          className="text-cyan-400"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="text-[26px] font-bold leading-none text-white">
          {value}
        </h3>

        <p className="mt-1 text-[16px] text-slate-400">
          {label}
        </p>
      </div>
    </div>
  );
}

export default FloatingCard;