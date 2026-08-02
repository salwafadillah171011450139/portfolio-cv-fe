import { profile } from "../../../../constants/profile";

function ProfileImage() {
  return (
    <div className="relative z-10">
      <img
        src={profile.image}
        alt={`${profile.firstName} ${profile.lastName}`}
        className="h-80 w-80 rounded-full border-4 border-cyan-400 object-cover"
      />
    </div>
  );
}

export default ProfileImage;