import { Nav, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="w-screen font-inter h-screen bg-[#080B12] flex flex-col">
      <Nav />
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
