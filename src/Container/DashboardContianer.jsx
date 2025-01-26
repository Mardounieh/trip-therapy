import { Outlet } from "react-router";

import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardContainer = () => {
  return (
    <div>
        {/* <div className="absolute w-3/4 rounded-full top-[-5%] left-[8%] h-96">
          <svg width="100%" height="200" viewBox="0 0 1000 200">
            <path
              d="M 0 100 
                Q 166 0, 333 100 
                T 666 100
                T 1000 100"
              fill="none"
              stroke="#3498db"
              strokeWidth="2"
              className="wave-path"
            />
          </svg>
        </div> */}
      <div className="relative flex w-screen h-screen backdrop-blur-sm">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-clrLightGreen to-transparent" />
          {/* Outlet */}
          <div className="relative">
            {/* light green shadow */}
            <div className="absolute right-0 w-full h-[50vh] flex flex-col bg-[radial-gradient(300%_250%_at_50%_0%,#606c3830_1%,transparent_20%)]"></div>
            <Outlet />
          </div>
        </div>
        {/* Header and Sidebar */}
      </div>
    </div>
  );
}

export default DashboardContainer