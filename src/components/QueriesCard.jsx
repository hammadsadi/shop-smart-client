import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const QueriesCard = ({ query }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-800">
      <div className="relative">
        <img
          alt=""
          src={query?.imageUrl}
          className="h-56 w-full object-cover"
        />
        <div className="absolute right-2 bottom-2 bg-color-primary py-2 px-7 text-white rounded-tl-3xl rounded-br-3xl">
          <p className="text-base text-white font-medium">
            {query?.productBrand}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6">
        <h3 className="mt-0.5 text-xl md:text-2xl text-black font-bold dark:text-white">
          {query?.queryTitle}
        </h3>
        <h3 className="mt-0.5 text-base font-medium md:text-lg text-black dark:text-white">
          {query?.productName}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-color-overly dark:text-white">
          {query?.boycottingReason.slice(0, 150)}...
        </p>
      </div>
      <div className="flex justify-between items-center p-4 sm:p-6">
        <div className="flex gap-2">
          <img
            src="https://i1.sndcdn.com/avatars-jRXwcAeJYYa5np7a-EGDQqA-t500x500.jpg"
            alt=""
            className="w-8 h-8 items-center border-2 border-color-primary rounded-full"
          />
          <div>
            <h3 className="text-base font-semibold dark:text-white">
              Hammad Sadi
            </h3>
            <time
              dateTime="2022-10-10"
              className="block text-xs text-color-overly dark:text-white"
            >
              {" "}
              Post: {new Date(query?.user.date).toLocaleDateString()}
            </time>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link
            to={`/query-details/${query?._id}`}
            className="bg-color-primary text-white text-sm px-3 py-2 rounded-md"
          >
            Recommend
          </Link>
          <button className="flex items-center gap-2 dark:text-white">
            {" "}
            <FaRegCommentDots /> <small>
              {query?.recommendationCount}
            </small>{" "}
          </button>
        </div>
      </div>
    </article>
  );
};

QueriesCard.propTypes = {
  query: PropTypes.object,
};

export default QueriesCard;
