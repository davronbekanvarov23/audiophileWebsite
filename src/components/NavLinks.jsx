import { NavLink } from "react-router-dom";
const links = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Headphones", path: "/headphones" },
  { id: 3, text: "Speakers", path: "/speakers" },
  { id: 4, text: "Earphones", path: "/earphones" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, text, path } = link;
        return (
          <li key={id}>
            {" "}
            <NavLink
              to={path}
              className=" text-xs font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-white duration-200 ease-in-out hover:text-orange-500"
            >
              
              {text}{" "}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
