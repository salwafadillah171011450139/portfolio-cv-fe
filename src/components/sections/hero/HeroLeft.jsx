import { profile } from "../../../constants/profile";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

function HeroLeft() {
  return (
    <div>
      {/* Greeting */}
      <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
        • {profile.greeting}
      </div>

      {/* Name */}
      <h1 className="mt-8 text-7xl font-bold text-white">
        {profile.firstName}
      </h1>

      <h1 className="text-7xl font-bold text-white-400">
        {profile.lastName}
      </h1>

      {/* Role */}
      <h2 className="mt-6 text-4xl font-semibold text-cyan-300">
        {profile.role}
      </h2>

      {/* Description */}
      <p className="mt-8 max-w-xl leading-8 text-gray-400">
        Saya membangun aplikasi modern menggunakan{" "}
        {profile.skills.map((skill, index) => (
          <span key={skill}>
            <span className="font-semibold text-white">{skill}</span>
            {index < profile.skills.length - 1 ? ", " : ""}
          </span>
        ))}
        .
      </p>

      <HeroButtons />

      <HeroSocial />
    </div>
  );
}

export default HeroLeft;