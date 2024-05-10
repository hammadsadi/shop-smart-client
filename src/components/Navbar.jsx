import { Link } from "react-router-dom";

const Navbar = () => {
  let navItem = (
    <>
      <li>
        <Link to="/" className="text-base font-medium">
          Home
        </Link>
      </li>
      <li>
        <Link to="/queries" className="text-base font-medium">
          Queries
        </Link>
      </li>
      <li>
        <Link to="/recommendations-for-me" className="text-base font-medium">
          Recommendations For Me
        </Link>
      </li>
      <li>
        <Link to="/my-queries" className="text-base font-medium">
          My Queries
        </Link>
      </li>
      <li>
        <Link to="/my-recommendations" className="text-base font-medium">
          My recommendations
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-color-secondary text-white">
      <div className="navbar container mx-auto md:px-0 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-color-secondary rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="bg-color-primary py-2 px-8 rounded-md text-lg font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
