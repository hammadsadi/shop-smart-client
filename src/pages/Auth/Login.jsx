import { Link, useLocation, useNavigate } from "react-router-dom";
import { toastAlert } from "../../utils/toastAlert";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";
const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  // Handle User Create
  const handleUserCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validate
    if (!email || !password) {
      return toastAlert("All Fields Are Required", "error");
    }
    // Login User
    try {
      const result = await signIn(email, password);
      await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      toastAlert("Login Success", "success");
      location.state ? navigate(location.state) : navigate("/");
      e.target.reset();
    } catch (error) {
      toastAlert("Invalid Email and Password", "error");
    }
  };

  // Handle Login With Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      if (result.user) {
        toastAlert("Login Success", "success");
        location.state ? navigate(location.state) : navigate("/");
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };
  return (
    <Fade>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <Link
              to="/register"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              &nbsp; Sign up here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-color-primary focus:dark:ring-color-primary"
              onClick={handleGoogleLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 326667 333333"
                className="w-5 h-5 fill-current text-rose-600"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                  fill="#4285f4"
                />
                <path
                  d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                  fill="#34a853"
                />
                <path
                  d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                  fill="#fbbc04"
                />
                <path
                  d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                  fill="#ea4335"
                />
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form noValidate="" className="space-y-8" onSubmit={handleUserCreate}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@com"
                  className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-color-primary text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
