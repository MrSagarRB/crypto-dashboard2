import React from "react";
import { Switch } from "@nextui-org/react";

const securityCardData = [
  {
    id: 1,
    title: "Identity",
    status: "Disable",
    checked: true,
  },
  {
    id: 2,
    title: "Identity",
    status: "Disable",
    checked: false,
  },
  {
    id: 3,
    title: "Phone",
    status: "Enable",
    checked: false,
  },
  {
    id: 4,
    title: "Phone",
    status: "Enable",
    checked: true,
  },
];

function Security() {
  return (
    <div className=" flex-center justify-between gap-5">
      <div className="w-[60%] test">
        <p className="text-[20px]">Security</p>

        <div className="grid md:grid-cols-2 gap-5">
          <SecurityCard />
        </div>
      </div>
      <div className="w-[40%] test ">
        <p className="text-[20px]">Security</p>
      </div>
    </div>
  );
}

export default Security;

function SecurityCard() {
  return (
    <div className="w-[273px] h-[64px] bg-white flex-center justify-between p-5">
      <div>
        <p className="text-[#5D4E7B] text-[16px] font-[500]">Identity</p>
        <p className="text-[14px]"> Disable</p>
      </div>
      <div>
        <Switch color="success" checked={true} />
      </div>
    </div>
  );
}
