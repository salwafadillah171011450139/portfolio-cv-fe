function SocialButton({
  icon: Icon,
  href,
  ariaLabel,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-xl
        border
        border-slate-700
        bg-[#0B1B22]
        text-gray-400
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:text-cyan-400
      "
    >
      <Icon size={22} />
    </a>
  );
}

export default SocialButton;