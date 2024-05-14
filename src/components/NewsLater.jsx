import { Fade } from "react-awesome-reveal";
const NewsLater = () => {
  return (
    <Fade delay={50}>
      <div className="">
        <form className="text-center max-w-md mx-auto">
          <h6 className="footer-title capitalize text-white">
            Subscribe to our newsletter to get the latest Queries directly in
            your inbox.
          </h6>
          <div>
            <div className="join">
              <input
                type="text"
                placeholder="username@email.com"
                className="input focus:outline-none focus:border-color-primary border border-color-primary join-item"
              />
              <button className="btn bg-color-primary hover:bg-color-primary text-white join-item border-color-primary hover:border-color-primary">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default NewsLater;
