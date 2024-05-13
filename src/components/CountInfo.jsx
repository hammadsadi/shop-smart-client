import countImg from "../assets/images/count-info.jpg";
import CountUp from "react-countup";
const CountInfo = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${countImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="py-6 md:py-12 text-center text-neutral-content w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CountUp start={0} end={1000} duration={6} delay={3}>
              {({ countUpRef }) => (
                <div>
                  <div className="flex items-center gap-2 justify-center">
                    <h2
                      className="text-3xl md:text-6xl font-bold"
                      ref={countUpRef}
                    ></h2>
                    <span className="text-3xl">+</span>
                  </div>
                  <p className="text-lg md:text-3xl font-medium">Query</p>
                </div>
              )}
            </CountUp>

            <CountUp start={0} end={500} duration={6} delay={3}>
              {({ countUpRef }) => (
                <div>
                  <div className="flex items-center gap-2 justify-center">
                    <h2
                      className="text-3xl md:text-6xl font-bold"
                      ref={countUpRef}
                    ></h2>
                    <span className="text-3xl">+</span>
                  </div>
                  <p className="text-lg md:text-3xl font-medium">
                    Recommendations
                  </p>
                </div>
              )}
            </CountUp>
            <CountUp start={0} end={700} duration={6} delay={3}>
              {({ countUpRef }) => (
                <div>
                  <div className="flex items-center gap-2 justify-center">
                    <h2
                      className="text-3xl md:text-6xl font-bold"
                      ref={countUpRef}
                    ></h2>
                    <span className="text-3xl">+</span>
                  </div>
                  <p className="text-lg md:text-3xl font-medium">Users</p>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountInfo;
