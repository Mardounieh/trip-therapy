import { Outlet } from "react-router";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import { useState } from "react";
import { Icon } from "@iconify/react";

const DashboardContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="relative flex w-screen min-h-screen backdrop-blur-sm">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className={`relative flex flex-col flex-1 ${
          isSidebarOpen ? "w-[calc(100%_-_13rem)]" : "w-[calc(100%_-_4rem)]"
        }`}
      >
        <Header />
        <main className="relative flex-1 w-full bg-clrMilk dark:bg-clrCoal">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardContainer;
