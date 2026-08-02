import Button from "../../common/Button";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button>
        Hire Me
      </Button>

      <Button variant="outline">
        View Projects
      </Button>
    </div>
  );
}

export default HeroButtons;