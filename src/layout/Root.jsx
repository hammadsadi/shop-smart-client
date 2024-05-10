import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div>
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Root;
