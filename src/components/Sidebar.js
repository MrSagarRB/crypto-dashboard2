import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdWallet } from "react-icons/io";
import { TiArrowShuffle } from "react-icons/ti";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiExchangeBoxFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import { ImMobile } from "react-icons/im";
import { BsDot } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { User } from "@nextui-org/react";

const sidebarMenuData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillHome fontSize={20} />,
  },

  {
    id: 2,
    title: "Wellet",
    icon: <IoMdWallet fontSize={20} />,
  },
  {
    id: 3,
    title: "Statistics",
    icon: <TiArrowShuffle fontSize={20} />,
  },
  {
    id: 4,
    title: "Transactions",
    icon: <AiOutlineTransaction fontSize={20} />,
  },
  {
    id: 5,
    title: "Exchange",
    icon: <RiExchangeBoxFill fontSize={20} />,
  },

  {
    id: 6,
    title: "News",
    icon: <IoIosPaper fontSize={20} />,
  },
];

const activeDeviceData = [
  {
    id: 1,
    icon: <ImMobile />,
    device: "Iphone 6s Plus",
    deviceType: "mobile",
    status: true,
  },
  {
    id: 2,
    icon: <FaLaptop />,
    device: "Macbook 2017",
    deviceType: "desktop",
    status: true,
  },
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className=" w-[281px] h-full transition-all duration-300 bg-[#FFFFFF] p-5 ">
      <div className=" flex-center gap-3 justify-center py-7 ">
        {" "}
        <img src="./logo.png" />{" "}
        <p className="purple-text font-[400]">Mine&Shine</p>
      </div>
      <div className=" my-16 flex flex-col gap-8 ">
        {sidebarMenuData.map((item) => {
          return (
            <div
              className={`flex-center gap-3 cursor-pointer effect ${
                activeTab === item.title && "purple-text"
              }`}
              key={item.id}
              onClick={() => {
                setActiveTab(item.title);
              }}
            >
              {" "}
              {item.icon}
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-[150px]">
        <p>Active device</p>
        <div className="flex flex-col gap-7 mt-6">
          {activeDeviceData.map((item) => {
            return (
              <div className="flex-center gap-3 justify-around cursor-pointer  ">
                <div className="flex-center gap-4">
                  <div className="p-5 bg-[#F3F5FA] purple-text">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[12px] font-[500]">{item.device}</p>
                    <p className="flex-center text-[12px] font-[400]">
                      {" "}
                      <BsDot
                        fontSize={30}
                        className="text-green-500 purple-text"
                      />{" "}
                      Active
                    </p>
                  </div>
                </div>
                <BiDotsVerticalRounded />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-10">
        <User src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" />
      </div>
    </div>
  );
}

export default Sidebar;
