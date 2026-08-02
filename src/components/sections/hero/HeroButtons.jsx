import Button from "../../common/Button";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Hire Me
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </Button>
    </div>
  );
}

export default HeroButtons;