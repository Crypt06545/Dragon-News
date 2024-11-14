import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-5 font-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/carrer"}>Carrer</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
