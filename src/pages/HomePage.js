import React, { useState } from "react";
import Header from "../components/header/Header";
import Overview from "../components/overview/Overview";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  console.log(activeTab);
  return (
    <div className="bg-[#F3F5FA] h-screen w-full tomorrow flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      <div className=" w-full px-14 pt-14">
        <div>
          <Header />
        </div>
        <div>
          <Overview />
        </div>
        <div>Security</div>
      </div>
    </div>
  );
}

export default HomePage;
