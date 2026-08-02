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
    url: "https://github.com/salwafadillah171011450139",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/salwa-fadillah-backendeveloper/",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/salwa_ubaidillah?igsh=MWk3cWg4aDVkYjNhOQ==",
  },
  {
    id: "email",
    icon: MdEmail,
    url: "gmailto:salwafadillah3@gmail.com",
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