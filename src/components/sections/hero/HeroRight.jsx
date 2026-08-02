import GlowCircle from "./right/GlowCircle";
import ProfileImage from "./right/ProfileImage";
import HeroStats from "./right/HeroStats";

function HeroRight() {
  return (
    <div className="relative flex items-center justify-center">

      <GlowCircle />

      <ProfileImage />

      <HeroStats />

    </div>
  );
}

export default HeroRight;