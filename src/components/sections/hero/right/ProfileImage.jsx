import { profile } from "../../../../constants/profile";

function ProfileImage() {
  return (
    <div className="relative z-10">
      <img
        src={profile.image}
        alt={`${profile.firstName} ${profile.lastName}`}
        className="
          h-[360px]
          w-[360px]
          rounded-full
          object-cover
          border-[3px]
          border-cyan-400
          shadow-[0_0_80px_rgba(34,211,238,.35)]
        "
      />
    </div>
  );
}

export default ProfileImage;