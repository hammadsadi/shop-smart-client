import PropTypes from "prop-types";
const Recommendation = ({ recommendation }) => {
  return (
    <div>
      <div className="flex gap-3 md:gap-6 items-center border-b py-2 md:py-5">
        <img
          src={recommendation?.recommendedProductImage}
          alt=""
          className="w-10 h-10 md:w-16 md:h-16 border-2 border-color-primary rounded-full"
        />
        <div className="">
          <div>
            <h2 className="font-bold text-lg md:text-xl dark:text-white">
              {recommendation?.recommendationTitle}
            </h2>
            <time
              dateTime="2022-10-10"
              className="block text-xs text-color-overly dark:text-white"
            >
              {" "}
              Post: {new Date().toLocaleDateString()}
            </time>
          </div>

          <p className="text-color-overly dark:text-white">
            {recommendation?.recommendationReason}
          </p>
        </div>
      </div>
    </div>
  );
};
Recommendation.propTypes = {
  recommendation: PropTypes.object,
};

export default Recommendation;
