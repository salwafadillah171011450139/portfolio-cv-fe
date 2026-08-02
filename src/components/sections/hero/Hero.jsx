import Background from "../../common/Background";
import Container from "../../common/Container";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#07141A]
        pt-40
      "
    >
      <Background />

      <Container>
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          {/* Hero Content */}
          <div className="order-2 lg:order-1">
            <HeroLeft />
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <HeroRight />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;