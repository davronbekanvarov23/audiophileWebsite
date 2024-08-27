import logo from "../../public/assets/shared/desktop/logo.svg";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className=" bg-black pt-20 md:pb-[4.6rem]">
      <div className="align-content">
        <div className="lg:flex  justify-between mb-9">
          <NavLink to="/" className=" w-[14.3rem] flex-shrink-0  ">
            <img src={logo} alt="" />
          </NavLink>
          <ul className="flex gap-8 ">
            <NavLinks />
          </ul>
        </div>
        <div
          className="lg:flex justify-between 
        "
        >
          <p className=" w-[540px] text-white opacity-50 mb-14 ">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <nav className="flex gap-4 ">
            {" "}
            <Link to="#">
              {" "}
              <img
                src="../../public/assets/shared/desktop/icon-facebook.svg"
                alt=""
                className="hover:bg-orange-500 cursor-pointer"
              />
            </Link>{" "}
            <Link to="#">
              {" "}
              <img
                src="../../public/assets/shared/desktop/icon-instagram.svg"
                alt=""
                className="hover:bg-orange-500 cursor-pointer"
              />
            </Link>{" "}
            <Link to="#">
              {" "}
              <img
                src="../../public/assets/shared/desktop/icon-twitter.svg"
                alt=""
                className="hover:bg-orange-500 cursor-pointer"
              />
            </Link>
          </nav>
        </div>
        <p className=" w-[540px] text-white opacity-50 ">
          Copyright {year}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
