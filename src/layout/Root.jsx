import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default Root;
