import Container from "../../common/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#07141A] pt-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroLeft />

          <HeroRight />
        </div>
      </Container>
    </section>
  );
}

export default Hero;