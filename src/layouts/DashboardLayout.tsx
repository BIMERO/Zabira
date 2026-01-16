import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <main className="bg-[#F4F4F5] h-full w-screen flex items-start relative min-h-screen overflow-hidden">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className={`${
          collapsed
            ? "ml-0 lg:ml-20 w-full lg:w-[calc(100vw-80px)] "
            : "ml-0 lg:ml-64 w-full lg:w-[calc(100vw-256px)] "
        }`}
      >
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
