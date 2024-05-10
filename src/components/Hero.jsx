import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>

          <Link>
            <button className="bg-color-primary py-2 px-8 rounded-md text-base md:text-lg font-semibold">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  banner: PropTypes.object,
};

export default Hero;
