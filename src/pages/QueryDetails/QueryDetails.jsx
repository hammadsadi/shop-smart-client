import { FaRegCommentDots } from "react-icons/fa";
import Recommendation from "../../components/Recommendation";
import { useLoaderData } from "react-router-dom";
const QueryDetails = () => {
  const singleQuery = useLoaderData();
  console.log(singleQuery);
  return (
    <section className="dark:bg-gray-900">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-800">
        <div className="flex justify-between items-center p-4 sm:p-6"></div>
        <div className="relative">
          <img
            alt=""
            src={singleQuery?.imageUrl}
            className="h-56 md:h-96 lg:h-[450px] w-full object-cover"
          />
          <div className="absolute right-2 bottom-2 bg-color-primary py-2 px-7 text-white rounded-tl-3xl rounded-br-3xl">
            <p className="text-base text-white font-medium">
              {singleQuery?.productBrand}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6">
          <div>
            <h3 className="mt-0.5 text-xl md:text-2xl text-black font-bold dark:text-white mb-3">
              {singleQuery?.queryTitle}
            </h3>
          </div>
          <div className="border-b pb-2 md:pb-5 flex gap-5 items-center">
            <div className="flex gap-2">
              <img
                src={singleQuery?.user.photo}
                alt=""
                className="w-8 h-8 items-center border-2 border-color-primary rounded-full"
              />
              <div>
                <h3 className="text-base font-semibold dark:text-white">
                  {singleQuery?.user.name}
                </h3>
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-color-overly dark:text-white"
                >
                  {" "}
                  Post: {new Date(singleQuery?.user.date).toLocaleDateString()}
                </time>
              </div>
            </div>
            <div className="">
              <button className="flex items-center gap-2 dark:text-white">
                {" "}
                <FaRegCommentDots />{" "}
                <small>{singleQuery?.recommendationCount}</small>{" "}
              </button>
            </div>
          </div>
          <div className="py-2 md:py-5 border-b">
            <h3 className="mt-0.5 text-base font-medium md:text-lg text-black dark:text-white">
              {singleQuery?.productName}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-color-overly dark:text-white">
              {singleQuery?.boycottingReason}
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center w-full py-5 border-b">
              <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:text-gray-800">
                {/* <h2 className="mb-3 text-3xl font-semibold text-center dark:text-white">
                Create New Query
              </h2> */}

                <form noValidate="" className="space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="recommendationTitle"
                        placeholder="Recommendation Title"
                        className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="recommendedProductName"
                        placeholder="Recommended product Name "
                        className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="recommendedProductImage"
                        placeholder="Recommended Product Image"
                        className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="recommendationReason"
                        placeholder="Recommendation Reason"
                        className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md bg-color-primary text-white"
                  >
                    Add Recommendation
                  </button>
                </form>
              </div>
            </div>
            <div className="pt-2 md:pt-5">
              <Recommendation />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default QueryDetails;
