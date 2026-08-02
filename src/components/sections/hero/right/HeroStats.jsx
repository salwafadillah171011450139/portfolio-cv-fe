import { heroStats } from "../../../../constants/heroStats";
function HeroStats() {
  return (
    <div>
      {heroStats.map((stat) => (
        <div key={stat.id}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;