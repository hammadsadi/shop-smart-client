import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const Recommendation = ({ recommendation }) => {
  return (
    <Fade>
      <div className="flex items-stretch gap-4  border-b py-2 md:py-5">
        <img
          src={recommendation?.recommendedProductImage}
          alt=""
          className="aspect-square w-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="text-lg/tight font-medium text-gray-900 dark:text-white">
            {recommendation?.recommendationTitle}
          </h3>
          <time
            dateTime="2022-10-10"
            className="block text-xs text-color-overly dark:text-white"
          >
            {" "}
            Post: {new Date().toLocaleDateString()}
          </time>

          <p className="mt-0.5 text-gray-700 dark:text-white">
            {recommendation?.recommendationReason}
          </p>
        </div>
      </div>
    </Fade>
  );
};
Recommendation.propTypes = {
  recommendation: PropTypes.object,
};

export default Recommendation;
