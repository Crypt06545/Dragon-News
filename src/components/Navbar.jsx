import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
      <div>{user && user.name}</div>
      <div className="space-x-5 font-medium">
        <NavLink to="/" className="text-black">
          Home
        </NavLink>
        <NavLink to="/career" className="text-black">
          Career
        </NavLink>
        <NavLink to="/about" className="text-black">
          About
        </NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="User Icon" />
        </div>
        {
          user && user.email ?<button onClick={logOut} className="btn btn-neutral rounded-none">Log-out</button>:<Link to={"/auth/signUp"}>
          <button className="btn btn-neutral rounded-none">Login</button>
        </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
