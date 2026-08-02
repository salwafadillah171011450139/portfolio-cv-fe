import GlowCircle from "./right/GlowCircle";
import HeroStats from "./right/HeroStats";
import ProfileImage from "./right/ProfileImage";

function HeroRight() {
  return (
    <div className="relative flex h-[700px] items-center justify-center">
      <GlowCircle />

      <ProfileImage />

      <HeroStats />
    </div>
  );
}

export default HeroRight;