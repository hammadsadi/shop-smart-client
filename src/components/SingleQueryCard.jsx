import { FaPenSquare, FaTrashAlt, FaRegEye } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleQueryCard = ({ query, handleDeleteOwnQuery }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-800">
      <div className="relative">
        <img
          alt=""
          src={query?.imageUrl}
          className="w-full max-h-56 object-cover"
        />
        <div className="absolute right-2 bottom-2 bg-color-primary py-2 px-7 text-white rounded-tl-3xl rounded-br-3xl">
          <p className="text-base text-white font-medium">
            {query?.productBrand}{" "}
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
          {query?.boycottingReason.slice(0, 100)}{" "}
        </p>
      </div>
      <div className="flex gap-5 p-4 sm:p-6 justify-center">
        <Link to={`/query-details/${query?._id}`} className="text-xl">
          {" "}
          <FaRegEye className="text-color-primary" />{" "}
        </Link>
        <Link to={`/update-query/${query._id}`} className="text-lg">
          {" "}
          <FaPenSquare className="text-color-primary" />{" "}
        </Link>
        <button
          className="text-lg"
          onClick={() => handleDeleteOwnQuery(query._id)}
        >
          {" "}
          <FaTrashAlt className="text-color-primary" />{" "}
        </button>
      </div>
    </article>
  );
};
SingleQueryCard.propTypes = {
  query: PropTypes.object,
  handleDeleteOwnQuery: PropTypes.func,
};

export default SingleQueryCard;
