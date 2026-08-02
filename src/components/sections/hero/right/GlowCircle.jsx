import CircleDot from "../../../common/CircleDot";

function GlowCircle() {
  return (
    <>
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "
      />

      {/* Circle 1 */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[430px]
          w-[430px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-500/20
        "
      />

      {/* Circle 2 (garis putus-putus) */}
      <div
  className="
    absolute
    left-1/2
    top-1/2
    h-[390px]
    w-[390px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    dashed-circle
  "
/>

      {/* Dot besar */}
     <CircleDot
  size="h-6 w-6"
  className="right-[68px] top-[43%]"
/>

<CircleDot
  size="h-5 w-5"
  className="right-[85px] bottom-[250px]"
/>
    </>
  );
}

export default GlowCircle;