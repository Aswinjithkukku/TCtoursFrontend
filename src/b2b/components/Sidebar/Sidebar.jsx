import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import SidebarMenu from "./SidebarMenu";
import { sidebarMenus } from "../../data";
import WalletDepositModal from "../Header/WalletDepositModal";
import { BsWallet2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";
import { useHandleClickOutside } from "../../../hooks";
import AdminDropdown from "../Header/AdminDropdown";
import { RxAvatar } from "react-icons/rx";
import { logoPng } from "../../../static/imagesB2B";

export default function Sidebar({ setSidebarView, sidebarView }) {
  const navigate = useNavigate();
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

  const [walletDropdown, setWalletDropdown] = useState(false);
  const { balance } = useSelector((state) => state.wallet);
  const { selectedCurrency } = useSelector((state) => state.home);
  const { agent } = useSelector((state) => state.agents);

  const wrapperRef = useRef();
  useHandleClickOutside(wrapperRef, () => setIsAdminDropdownOpen(false));

  return (
    <>
      <div
        className={`z-20 sidebar top-0 left-0 flex h-[100vh] py-1 px-4 bg-[#003580]  ${
          sidebarView ? "w-[250px]" : "w-[0px] lg:w-[250px]"
        } overflow-hidden fixed flex-col transition-all `}
      >
        <div className="flex items-center justify-between lg:justify-around px-5 lg:px-0 py-5 cursor-pointer ">
          <div
            className="h-12 bg-gray-200/50 px-5 py-1 rounded-xl"
            onClick={() => navigate("/b2b")}
          >
            <img src={logoPng} alt="logo" className="h-full object-fill" />
          </div>
          <p
            className="lg:hidden text-light text-xl"
            onClick={() => setSidebarView(false)}
          >
            <BiMenuAltRight />
          </p>
        </div>

        {/* <div
          className="lg:hidden bg-primaryColor flex gap-[10px] items-center px-[12px] cursor-pointer"
          onClick={() => setWalletDropdown(!walletDropdown)}
        >
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
          <WalletDepositModal setWalletDropdown={setWalletDropdown} />
        )} */}

        <div id="sidebar" className="flex-1 overflow-y-auto mt-2 mr-[3px]">
          <ul className="">
            {sidebarMenus.map((item, index) => {
              return (
                <SidebarMenu
                  key={index}
                  {...item}
                  setSidebarView={setSidebarView}
                  sidebarView={sidebarView}
                />
              );
            })}
          </ul>
          <div className="">
            <Link
              to="#"
              className="group block py-4 px-3 mb-4 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-200"
              href="#"
            >
              <div className="flex justify-around items-center">
                <div className="flex w-12 h-12 mb-4 items-center justify-center bg-blue-600 group-hover:bg-blue-500 rounded-xl">
                  <span className="text-white">
                    <BsWallet2 />
                  </span>
                </div>
                <h5 className="text-sm font-medium text-blue-50 mb-2">
                  {priceConversion(balance, selectedCurrency, true)}
                </h5>
              </div>
              <p className="text-xs leading-normal font-semibold text-blue-200 text-center">
                Available balance
              </p>
            </Link>
            <div
              ref={wrapperRef}
              className="group flex py-5 px-6 items-center bg-gray-600 hover:bg-gray-500 rounded-xl transition duration-200"
              onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
            >
              <div className="flex px-2 h-12 items-center justify-center bg-gray-500 group-hover:bg-gray-600 rounded-lg text-3xl text-white">
                <RxAvatar />
              </div>
              <div className="relative h-[100%] flex gap-[10px] items-center px-[12px] cursor-pointer">
                <div className="hidden md:block">
                  <span className="block text-[12px] text-grayColor">
                    {agent?.agentCode}
                  </span>
                  <span className="block text-sm font-medium text-white">
                    {agent?.name}
                  </span>
                </div>
                {/* absolute modal */}
                {isAdminDropdownOpen && (
                  <AdminDropdown
                    setIsAdminDropdownOpen={setIsAdminDropdownOpen}
                  />
                )}
                {/* absolute modal */}
              </div>
            </div>
          </div>
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
