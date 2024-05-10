import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionTitle;
