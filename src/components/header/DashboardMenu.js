import React from "react";
const menuData = [
  {
    id: 1,
    icon: "Victor (1).png",
  },
  {
    id: 2,
    icon: "Victor (10).png",
  },
  {
    id: 3,
    icon: "Victor (11).png",
  },
  {
    id: 4,
    icon: "Victor (12).png",
  },
  {
    id: 5,
    icon: "Victor (13).png",
  },
  {
    id: 6,
    icon: "Victor (14).png",
  },
  {
    id: 7,
    icon: "Victor (15).png",
  },
  {
    id: 8,
    icon: "Victor (16).png",
  },
  {
    id: 9,
    icon: "Victor (18).png",
  },
];

function DashboardMenu({ activeTab, setActiveTab }) {
  return (
    <div className="flex-center gap-5 my-5">
      {menuData.map((item) => {
        return (
          <div
            className={`w-[60px] h-[60px] border-[2px] border-white flex-center justify-center rounded-[13px] bg-[#F3F5FA] effect cursor-pointer ${
              activeTab === item.id && "border-[#4F46BA]"
            }`}
            onClick={() => {
              setActiveTab(item.id);
            }}
          >
            <div className="bg-white h-11 w-11 flex-center justify-center rounded-[10px] ">
              <img src={` ./menu/${item.icon} `} height={15} width={15} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardMenu;
