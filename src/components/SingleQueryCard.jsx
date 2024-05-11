import { FaPenSquare, FaTrashAlt, FaRegEye } from "react-icons/fa";
import PropTypes from "prop-types";
const SingleQueryCard = ({ query }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-800">
      <div className="relative">
        <img alt="" src={query?.imageUrl} />
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
        <button className="text-xl">
          {" "}
          <FaRegEye className="text-color-primary" />{" "}
        </button>
        <button className="text-lg">
          {" "}
          <FaPenSquare className="text-color-primary" />{" "}
        </button>
        <button className="text-lg">
          {" "}
          <FaTrashAlt className="text-color-primary" />{" "}
        </button>
      </div>
    </article>
  );
};
SingleQueryCard.propTypes = {
  query: PropTypes.object,
};

export default SingleQueryCard;
