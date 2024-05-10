import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="space-y-2 max-w-md mx-auto text-center mb-4 md:mb-5">
      <h2 className="text-2xl md:text-4xl font-extrabold text-black">
        {title}
      </h2>
      <p className="text-base text-color-overly">{subtitle}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionTitle;
