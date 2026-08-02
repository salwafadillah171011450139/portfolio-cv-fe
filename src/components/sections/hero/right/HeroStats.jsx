import { heroStats } from "../../../../constants/heroStats";
import FloatingCard from "../../../common/FloatingCard";

function HeroStats() {
  return (
    <>
      {heroStats.map((stat) => (
        <FloatingCard
          key={stat.id}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          className={stat.className}
        />
      ))}
    </>
  );
}

export default HeroStats;