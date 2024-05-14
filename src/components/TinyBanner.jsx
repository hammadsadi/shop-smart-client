import { Link } from "react-router-dom";

const TinyBanner = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-color-secondary dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-3xl md:text-6xl tracking-tighter font-bold text-white">
              Explore &nbsp;
              <br className="sm:hidden" />
              Good Product
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0 text-white">
              <span>Popular Queries</span>
              <span className="font-bold text-lg text-white">100+</span>
            </div>
            <Link to="/queries">
              <button className="bg-color-primary text-white py-2 px-8 rounded-md text-base md:text-lg font-semibold">
                Lets Go
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyBanner;
