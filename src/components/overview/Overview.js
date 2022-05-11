import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";

const ColorCardData = [
  {
    id: 1,
    coins: "BTC/USD",
    value: "18 928.15",
    color: "#E3E0FF",
  },
  {
    id: 2,
    coins: "ETH/USD",
    value: "591.8874",
    color: "#D7F8E8",
  },
  {
    id: 3,
    coins: "XRP/USD",
    value: "0.61688",
    color: "#DAE3F7",
  },
  {
    id: 4,
    coins: "Litecoin/USD",
    value: "87.9917",
    color: "#F0EDEA",
  },
];

const appCardData = [
  {
    id: 1,
    logo: "fb.png",
    logoBg: "#3B5998",
    title: "Facebook",
    category: "Salary",
    value: "+$7000",
    time: "11:45 AM",
  },
  {
    id: 1,
    logo: "fb.png",
    logoBg: "#3B5998",
    title: "Facebook",
    category: "Salary",
    value: "+$7000",
    time: "11:45 AM",
  },
  {
    id: 1,
    logo: "fb.png",
    logoBg: "#3B5998",
    title: "Facebook",
    category: "Salary",
    value: "+$7000",
    time: "11:45 AM",
  },
  {
    id: 1,
    logo: "fb.png",
    logoBg: "#3B5998",
    title: "Facebook",
    category: "Salary",
    value: "+$7000",
    time: "11:45 AM",
  },
  {
    id: 1,
    logo: "fb.png",
    logoBg: "#3B5998",
    title: "Facebook",
    category: "Salary",
    value: "+$7000",
    time: "11:45 AM",
  },
];

function Overview() {
  return (
    <div className=" h-[500px] w-[80%] ">
      <p className="text-[20px]">Overview</p>
      <div className=" h-[498px] my-5 ">
        <div className="flex gap-10">
          <div className=" h-[448px] w-[405px] flex flex-col justify-between">
            <div className="bg-[#4F46BA] w-[405px] h-[269px] p-5 flex-center text-white justify-around">
              <div className="flex-col font-[400]  ">
                <p className="text-3 ">Available balance in USD</p>
                <p className="text-[30px] ">134,510.15</p>
                <div className="flex gap-5 my-5">
                  <div>
                    <p className="text-3 ">Transactions</p>
                    <p className="text-[22px]">34,405</p>
                  </div>
                  <div>
                    <p className="text-3 ">Wallets</p>
                    <p className="text-[22px]"> 23</p>
                  </div>
                </div>
                <p> Last activity at 21 May, 2021</p>
              </div>
              <div className="">
                <img src="./bitcoin-logo.png " />
              </div>
            </div>
            <div className="flex-center justify-between">
              <WhiteCard
                title="NioWallet"
                value="4.434953"
                symbol="NIO"
                icon="./bitcoinSmall.png"
              />
              <WhiteCard
                title="Ethereum Wallet"
                value="0.000298"
                symbol="ETH"
                icon="./EtherSmall.png"
              />
            </div>
          </div>
          <div className="test w-[250px] flex-center flex-col justify-between">
            {ColorCardData.map((item) => {
              console.log(item.color);
              return (
                <div
                  className={`bg-[${item.color}] w-full h-[97px] flex-center flex-col justify-center test`}
                >
                  <p className="text-[#6B6570]">{item.coins}</p>
                  <p className="text-[#151630] font-[600] text-[21px] flex-center gap-2">
                    {" "}
                    ${item.value} <BsArrowUpLeft fontSize={25} />{" "}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[30%] test ml-auto flex flex-col justify-between">
            {appCardData.map((item) => {
              return (
                <div className=" h-[77px] p-5 flex-center justify-between bg-white">
                  <div className="flex-center gap-5 ">
                    <div className="w-[57px] h-[57px] bg-[#3B5998] flex-center justify-center rounded-[8px]">
                      <img src="./app logo/fb.png" />
                    </div>
                    <div className="font-[400]">
                      <p className="text-[#1E253A] text-[16px]">
                        {" "}
                        {item.title}
                      </p>
                      <p className="text-[14px] text-[#838690]">
                        {" "}
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#F32323] text-[16px] font-[500]">
                      {" "}
                      {item.value}
                    </p>
                    <p className="text-[14px] font-[400] text-[#838691]">
                      {item.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

function WhiteCard(props) {
  return (
    <div className="bg-white w-[193px] h-[157px] flex-center flex-col justify-center text-[#0D1118]  gap-1">
      {" "}
      <p className="text-[11px] ">{props.title}</p>
      <p className="text-[17px] font-[500]">
        {" "}
        {props.value}
        <span className="text-[#777E8A] text-[17px] "> {props.symbol}</span>
      </p>
      <img src={props.icon} />
    </div>
  );
}
