import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi'
import SidebarMenu from "./SidebarMenu";
import { sidebarMenus } from "../../data";
import WalletDepositModal from "../Header/WalletDepositModal";

export default function Sidebar({ setSidebarView, sidebarView }) {
    const navigate = useNavigate()
    const [walletDropdown, setWalletDropdown] = useState(false)

    return (
        <>
        <div className={`z-20 sidebar top-0 left-0 flex h-[100vh] ${sidebarView ? "w-[250px]" : "w-[0px] lg:w-[250px]"} overflow-hidden fixed bg-primaryColor flex-col transition-all `}>
            <div className="flex items-center justify-between lg:justify-around px-5 lg:px-0 py-5 cursor-pointer ">
                <h2 className="text-lg font-[600] text-white uppercase " onClick={() => navigate('/b2b')}>
                    Travellers{" "}
                    <span className="text-sm text-red-500">Choice</span>
                </h2>
                <p className="lg:hidden text-light text-xl" onClick={() => setSidebarView(false)}>
                    <BiMenuAltRight />
                </p>
            </div>

            <div className="lg:hidden bg-primaryColor flex gap-[10px] items-center px-[12px] cursor-pointer"
                onClick={() => setWalletDropdown(!walletDropdown)}>
                <div className="">
                    <span className="block text-light text-sm font-medium">
                        WALLET BALANCE
                    </span>
                    <span className="block text-[12px] font-semibold tracking-wide text-secondaryColor">
                        120 AED
                    </span>
                </div>
            </div>
            {walletDropdown && (
                <WalletDepositModal
                    setWalletDropdown={setWalletDropdown} />
            )}

            <div id="sidebar" className="flex-1 overflow-y-auto mt-4 mr-[3px]">
                <ul className="h-[100%]">
                    {sidebarMenus.map((item, index) => {
                        return <SidebarMenu key={index} {...item} />;
                    })}
                </ul>
            </div>

            <div className="px-[30px] mt-[2.5em] pb-4">
                <p className="text-[#9590ae] text-[12px] font-[500] mt-[5px]">
                    <span className="text-[11px] font-[400]">
                        &#169; {new Date().getFullYear()} All Rights Reserved
                    </span>
                </p>
            </div>
        </div>
        </>
    );
}
