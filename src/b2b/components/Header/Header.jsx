import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDropdown from "./AdminDropdown";
import WalletDropDown from "./WalletDropDown";
import CurrencyModal from "./CurrencyModal";
import { useHandleClickOutside } from "../../../hooks";
import { AiOutlineDown } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { HiBellAlert } from "react-icons/hi2";
import { getWalletBalance } from "../../../redux/slices/walletSlice";
import priceConversion from "../../../utils/PriceConversion";
import BtnLoader from "../BtnLoader";
import NotificationDropdown from "./NotificationDropdown";
import { getHome } from "../../../redux/slices/generalSlice";

export default function Header({ setSidebarView, sidebarView }) {
  const dispatch = useDispatch();
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [walletDropdown, setWalletDropdown] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const { agent } = useSelector((state) => state.agents);
  const { selectedCurrency } = useSelector((state) => state.home);
  const { balance, loading } = useSelector((state) => state.wallet);

  const currencyRef = useRef();
  useHandleClickOutside(currencyRef, () => setCurrency(false));

  const wrapperRef = useRef();
  useHandleClickOutside(wrapperRef, () => setIsAdminDropdownOpen(false));

  const walletRef = useRef();
  useHandleClickOutside(walletRef, () => setWalletDropdown(false));

  const notificationRef = useRef();
  useHandleClickOutside(notificationRef, () => setNotificationModal(false));

  useEffect(() => {
    dispatch(getWalletBalance());
    dispatch(getHome())
  }, [dispatch]);

  return (
    <>
      <div
        className={`${
          sidebarView ? "block" : "hidden"
        } lg:hidden lightglass absolute top-0 bottom-0 left-0 right-0 z-20`}
        onClick={() => setSidebarView(false)}
      ></div>
      <div className="sticky top-0 w-full bg-white h-[70px] px-5 z-10">
        <div className="h-full flex items-center justify-between">
          <div className="flex gap-2">
            <div className="text-xl" onClick={() => setSidebarView(true)}>
              <GrMenu />
            </div>
            <div className="lg:ml-[250px] uppercase text-sm font-[700] tracking-wide text-gray-500">
              {agent?.companyName}
            </div>
          </div>

          <div className="h-full">
            <div className="relative h-full flex">
              <div
                ref={notificationRef}
                className="flex space-x-1 items-center cursor-pointer relative mr-4"
                onClick={() => setNotificationModal(true)}
              >
                <span className="text-xl text-darktext">
                  <HiBellAlert />
                </span>
                {/* absolute modal */}
                {notificationModal && (
                  <div className="absolute z-20  -right-20  top-7 md:top-14 bg-light rounded-md w-[200px]">
                    <NotificationDropdown />
                  </div>
                )}
                {/* absolute modal */}
              </div>

              <div
                ref={currencyRef}
                className="flex space-x-1 items-center cursor-pointer relative mr-4"
                onClick={() => setCurrency(!currency)}
              >
                <span className="text-base font-medium">
                  <img
                    src={selectedCurrency ? selectedCurrency?.flag : ""}
                    className="w-[32px]"
                    alt="$"
                  />
                </span>
                <span className="text-sm">
                  {selectedCurrency ? selectedCurrency?.isocode : ""}
                </span>
                <span className="text-sm">
                  <AiOutlineDown />
                </span>
                {/* absolute modal */}
                {currency && (
                  <div className="absolute z-20 top-7 md:top-5 right-0 bg-light rounded-md w-[200px]">
                    <CurrencyModal
                      setCurrency={setCurrency}
                      currency={currency}
                    />
                  </div>
                )}
                {/* absolute modal */}
              </div>

              <div
                ref={walletRef}
                className="hidden lg:flex bg-primaryColor h-[100%] gap-[10px] items-center px-[12px] cursor-pointer"
                onClick={() => setWalletDropdown(!walletDropdown)}
              >
                <div className="">
                  <span className="block text-light text-sm font-medium">
                    WALLET BALANCE
                  </span>
                  <span className="block text-[12px] font-semibold tracking-wide text-secondaryColor">
                    {loading ? (
                      <div className="w-full border bg-gray-200 rounded-2xl shadow animate-pulse  h-4">

                      </div>
                    ) : (
                      <>{priceConversion(balance, selectedCurrency, true)}</>
                    )}
                  </span>
                </div>
                {/* absolute modal */}
                {walletDropdown && (
                  <WalletDropDown setWalletDropdown={setWalletDropdown} />
                )}
                {/* absolute modal */}
              </div>

              <div
                ref={wrapperRef}
                className="bg-[#f3f3f9] h-[100%] flex gap-[10px] items-center px-[12px] cursor-pointer"
                onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
              >
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:block">
                  <span className="block text-[12px] text-grayColor">
                    {agent?.agentCode}
                  </span>
                  <span className="block text-sm font-medium">
                    {agent?.name}
                  </span>
                  <span className="block text-[12px] text-grayColor">
                    {agent?.email}
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
      </div>
    </>
  );
}
