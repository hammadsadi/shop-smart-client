import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const Hero = ({ banner }) => {
  const { title, image } = banner || {};
  return (
    <div
      className="hero min-h-[calc(100vh-262px)]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <Fade direction="up">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>
          </Fade>

          <Fade direction="up" delay={100}>
            <Link>
              <button className="bg-color-primary py-2 px-8 rounded-md text-base md:text-lg font-semibold">
                Learn More
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  banner: PropTypes.object,
};

export default Hero;
