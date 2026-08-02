import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const socials = [
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/username",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/username",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://instagram.com/username",
  },
  {
    id: "email",
    icon: MdEmail,
    url: "mailto:email@gmail.com",
  },
];

function HeroSocial() {
  return (
    <div className="mt-12 flex gap-4">
      {socials.map(({ id, icon: Icon, url }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            text-gray-400
            transition
            hover:border-cyan-400
            hover:text-cyan-400
          "
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}

export default HeroSocial;