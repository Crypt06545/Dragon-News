import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Register from "../components/Register";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Register/>
    </div>
  );
};

export default AuthLayout;
