import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";
import { RiSearchLine } from "react-icons/ri";

function Header() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex-center justify-between  w-[80%]">
      <div className=" w-[60%]">
        {" "}
        <h1 className="text-2 text-[21px] font-[500]">Welcome To Dashboard</h1>
        <DashboardMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className=" w-[30%] ">
        <h1 className="uppercase text-[21px] font-[500]"> Search</h1>{" "}
        <div className=" flex-center gap-4">
          <div className="my-5 bg-white h-[48px] w-[257px] ">
            <input
              type="text"
              className="w-full h-full outline-none text-[15px] px-3"
              placeholder="Enter Search Term"
            />
          </div>
          <div className="bg-[#4F46BA] w-[48px] h-[48px] flex-center justify-center text-white text-2xl">
            <RiSearchLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
