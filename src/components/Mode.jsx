import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

let themeFromLocalStorage = () => {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : themes.winter;
};

function Mode() {
  const [currentTheme, setCurrenttheme] = useState(themeFromLocalStorage());

  const handleMode = (e) => {
    if (e.target.checked) {
      setCurrenttheme(themes.dracula);
    } else {
      setCurrenttheme(themes.winter);
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    const localtheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localtheme);
  }, [currentTheme]);
  return (
    <>
      {" "}
      <label onClick={handleMode} className="swap swap-rotate">
        <input type="checkbox" />
        {/* sun icon */}
        <FaSun className="swap-on fill-current w-4 h-4 text-slate-300" />
        {/* moon icon */}
        <FaMoon className="swap-off  fill-current w-4 h-4 text-white" />
      </label>
    </>
  );
}

export default Mode;
