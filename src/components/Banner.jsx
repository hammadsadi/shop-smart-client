import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <Fade direction="up">
            <h1 className="bg-gradient-to-r from-color-secondary via-blue-500 to-color-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Be a Conscious citizen!
              <span className="sm:block"> Share Yur Opinion</span>
            </h1>
          </Fade>
          <Fade direction="up" delay={100}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/add-query">
                <button className="bg-color-primary py-2 px-8 rounded-md text-base md:text-lg font-semibold ">
                  Add Query
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Banner;
