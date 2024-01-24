import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "@shopify/polaris/build/esm/styles.css";

const Layout = () => {
  return (
    <main className="bg-surfacePrimary min-h-[100vh] text-text">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
