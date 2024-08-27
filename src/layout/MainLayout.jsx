import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

// relative z-10 h-[9rem] lg:h-auto bg-black
