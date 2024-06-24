import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Sidebar />
    </>
  );
}
