import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="space-y-2 max-w-md mx-auto text-center mb-4 md:mb-5 ">
      <Fade>
        <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white">
          {title}
        </h2>
      </Fade>
      <Fade delay={100}>
        <p className="text-base text-color-overly dark:text-white">
          {subtitle}
        </p>
      </Fade>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionTitle;
