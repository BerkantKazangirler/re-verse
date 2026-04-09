import { Nav, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="w-screen font-inter h-screen bg-[#080B12] flex flex-col overflow-hidden">
      <Nav />
      <div className="flex flex-row flex-1 min-h-0 overflow-hidden">
        <Sidebar />
        <div className="flex-1 min-w-0 min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
