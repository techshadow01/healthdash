import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className=" rounded-4xl max-sm:rounded-none shadow-2xl w-[1300px] max-sm:w-full max-sm:shadow-none p-3 flex h-[840px] max-sm:h-full  bg-white">
      <Sidebar />
      <div className="relative w-full z-10">
        <div className="absolute max-sm:hidden -z-10 w-[50%] h-full  bg-[#F6F9FF] rounded-r-4xl blur-[2px] right-0"></div>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
