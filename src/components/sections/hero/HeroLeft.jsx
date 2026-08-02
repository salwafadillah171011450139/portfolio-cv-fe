import Badge from "../../common/Badge";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import { profile } from "../../../constants/profile";

function HeroLeft() {
  return (
    <div>

      <Badge>
        {profile.greeting}
      </Badge>

      <h1 className="mt-8 text-7xl font-bold leading-tight">
        {profile.firstName}
      </h1>

      <h2 className="text-7xl font-bold text-cyan-400">
        {profile.lastName}
      </h2>

      <h3 className="mt-5 text-3xl text-gray-300">
        {profile.role}
      </h3>

      <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
        {profile.description}
      </p>

      <HeroButtons />

      <HeroSocial />

    </div>
  );
}

export default HeroLeft;