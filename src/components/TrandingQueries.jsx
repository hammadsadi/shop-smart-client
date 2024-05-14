import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const TrandingQueries = ({ trend }) => {
  return (
    <Fade>
      <Link
        to={`/query-details/${trend?.queryId}`}
        className="group relative block bg-black"
      >
        <img
          alt=""
          src={trend?.recommendedProductImage}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-white bg-color-primary w-fit py-1 px-2">
            {trend?.productName.slice(0, 8)}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {trend?.queryTitle.slice(0, 15)}...
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {trend?.recommendationReason}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Fade>
  );
};
TrandingQueries.propTypes = {
  trend: PropTypes.object,
};

export default TrandingQueries;
