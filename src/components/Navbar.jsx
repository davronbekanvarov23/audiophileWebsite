import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Mode from "./Mode";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";
import logo from "../../public/assets/shared/desktop/logo.svg";

function Navbar() {
  const { amount } = useSelector((state) => state.products);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-black">
      <div className=" navbar align-content  ">
        <div className=" navbar-start">
        <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden text-gray-200">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
            >
              <NavLinks />
            </ul>
          </div>
          <NavLink to="/" className="h-auto w-[14.3rem] flex-shrink-0 hidden md:flex ">
            <img src={logo} alt="" />
          </NavLink>
         
        </div>
        <div className=" navbar-center ">
          <NavLink to="/" className="h-auto w-[14.3rem] flex-shrink-0  md:hidden">
            <img src={logo} alt="" />
          </NavLink>
          <ul className="menu menu-horizontal hidden lg:flex ">
            <NavLinks />
          </ul>
        </div>

        <div className=" navbar-end ">
          <Mode />
          <NavLink
            to="/cart"
            className="indicator btn btn-ghost btn-circle btn-md ml-4"
          >
            <div className=" indicator">
              <span className="indicator-item badge badge-primary badge-sm">
                {amount}
              </span>
              <BsCart3 className="w-6 h-6 text-gray-200" />
            </div>
          </NavLink>
          <button onClick={handleLogout} className="btn btn-primary ml-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
