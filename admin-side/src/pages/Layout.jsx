import { Outlet } from "react-router-dom";
import NavbarGood from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <NavbarGood />
      <Outlet />
    </>
  );
};

export default Layout;
