import Badge from "../../common/Badge";
import Button from "../../common/Button";

function HeroLeft() {
  return (
    <div>

      <Badge>Hello, I'm</Badge>

      <h1 className="mt-8 text-7xl font-bold">
        Muhammad
      </h1>

      <h2 className="mt-3 text-7xl font-bold text-cyan-400">
        Xxxxxxxx
      </h2>

      <p className="mt-6 text-4xl text-gray-300">
        Full Stack Developer
      </p>

      <p className="mt-8 max-w-xl leading-8 text-gray-400">
        Saya membangun aplikasi modern menggunakan
        React, Express.js, PostgreSQL, Docker,
        dan Cloud Technology.
      </p>

      <div className="mt-10 flex gap-5">

        <Button>
          Hire Me
        </Button>

        <Button variant="outline">
          View Projects
        </Button>

      </div>

    </div>
  );
}

export default HeroLeft;