import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyModal from "./CurrencyModal";
import { useHandleClickOutside } from "../../../hooks";
import { AiFillSetting, AiOutlineDown } from "react-icons/ai";
import { getWalletBalance } from "../../../redux/slices/walletSlice";
import NotificationDropdown from "./NotificationDropdown";
import { getHome } from "../../../redux/slices/generalSlice";
import { useLocation } from "react-router";
import { RiUserAddFill, RiUserFill } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import CartModal from "./CartModal";
import { FaPowerOff } from "react-icons/fa";
import { logoutAgent } from "../../../redux/slices/agentSlice";

export default function Header({ setSidebarView, sidebarView }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const [currency, setCurrency] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [cart, setCart] = useState(false);

  const { agent } = useSelector((state) => state.agents);
  const { selectedCurrency } = useSelector((state) => state.home);

  const currencyRef = useRef();
  useHandleClickOutside(currencyRef, () => setCurrency(false));

  const cartRef = useRef();
  useHandleClickOutside(cartRef, () => setCart(false));

  const notificationRef = useRef();
  useHandleClickOutside(notificationRef, () => setNotificationModal(false));

  useEffect(() => {
    dispatch(getWalletBalance());
    dispatch(getHome());
  }, [dispatch]);

  return (
    <section>
      <div className="lg:p-8 p-4 bg-[#003580] lg:pl-[260px]">
        <div className="flex  items-center justify-between -mx-2">
          <div className="w-full md:w-auto px-2 mb-6 md:mb-0">
            <h4
              className="text-2xl font-bold text-white leading-5 capitalize "
              contenteditable="false"
            >
              {location.pathname.startsWith("/b2b") ? (
                <>Hi, {agent?.name}</>
              ) : location?.pathname === "/b2b/order/attraction" ||
                location.pathname === "/b2b/visa/order" ? (
                <span className="flex gap-1 items-center">
                  <span>
                    <BsCartCheckFill />
                  </span>
                  <span>Orders</span>
                </span>
              ) : location?.pathname === "/b2b/markup/attraction" ||
                location.pathname === "/b2b/markup/visa" ? (
                <span className="flex gap-1 items-center">
                  <span>
                    <GoPlus />
                  </span>
                  <span>Advanced Markups</span>
                </span>
              ) : location.pathname === "/b2b/resellers" ? (
                <span className="flex items-center gap-1">
                  <span>
                    <RiUserFill />
                  </span>
                  <span>Agent</span>
                </span>
              ) : location.pathname === "/b2b/reseller/add" ? (
                <span className="flex items-center gap-1">
                  <span>
                    <RiUserAddFill />
                  </span>
                  <span>New Agent</span>
                </span>
              ) : location.pathname === "/b2b/settings" ? (
                <span className="flex items-center gap-1">
                  <span>
                    <AiFillSetting />
                  </span>
                  <span>Settings</span>
                </span>
              ) : (
                ""
              )}
            </h4>
          </div>
          <div className="w-full md:w-auto gap-6 flex ">
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
              <span className="text-sm text-white">
                {selectedCurrency ? selectedCurrency?.isocode : ""}
              </span>
              <span className="text-sm text-white">
                <AiOutlineDown />
              </span>
              {/* absolute modal */}
              {currency && (
                <div className="absolute z-20 top-7 md:top-0 right-0 bg-light rounded-md w-[200px]">
                  <CurrencyModal
                    setCurrency={setCurrency}
                    currency={currency}
                  />
                </div>
              )}
              {/* absolute modal */}
            </div>
            <div
              ref={notificationRef}
              className="flex  items-center cursor-pointer relative "
              onClick={() => setNotificationModal(true)}
            >
              <span className="text-2xl text-white">
                <IoNotifications />
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
              ref={cartRef}
              className="cursor-pointer whitespace-nowrap font-medium text-sm lg:text-base relative"
            >
              <div className="flex space-x-1 items-center w-[20px] rounded justify-center py-1">
                <span
                  className="text-2xl text-white"
                  onClick={() => setCart(!cart)}
                >
                  <IoMdCart />{" "}
                </span>
                {/* absolute cart modal */}
                {cart && <CartModal setCart={setCart} />}
                {/* absolute cart modal */}
              </div>
            </div>
            <div className="flex justify-center items-center text-gray-100/50 text-xl ">
              |
            </div>
            <div
              className="flex justify-center items-center text-white text-xl "
              onClick={() => dispatch(logoutAgent())}
            >
              <FaPowerOff />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
