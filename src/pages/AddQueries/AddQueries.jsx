const AddQueries = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="flex justify-center items-center w-full py-5">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:text-gray-800">
          <h2 className="mb-3 text-3xl font-semibold text-center dark:text-white">
            Login to your account
          </h2>

          <form noValidate="" className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="productName"
                  className="block text-sm dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  placeholder="Product Name"
                  className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="productBrand"
                  className="block text-sm dark:text-white"
                >
                  Product Brand
                </label>
                <input
                  type="text"
                  name="productBrand"
                  id="productBrand"
                  placeholder="Product Brand"
                  className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="imageUrl"
                  className="block text-sm dark:text-white"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image URL"
                  className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="queryTItle"
                  className="block text-sm dark:text-white"
                >
                  Query TItle
                </label>
                <input
                  type="text"
                  name="queryTItle"
                  id="queryTItle"
                  placeholder="Query TItle"
                  className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="boycottingReason"
                    className="text-sm dark:text-white"
                  >
                    Boycotting Reason
                  </label>
                </div>
                <textarea
                  name="boycottingReason"
                  id=""
                  className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                  placeholder="Boycotting Reason"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-color-primary text-white"
            >
              Add Query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddQueries;
