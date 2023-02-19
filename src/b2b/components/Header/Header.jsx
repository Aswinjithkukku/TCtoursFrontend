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
import { useLocation } from "react-router";
import { RiUserAddFill } from "react-icons/ri";
import { BsCartCheckFill, BsFileEarmarkMedicalFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

export default function Header({ setSidebarView, sidebarView }) {
  const dispatch = useDispatch();
  const location = useLocation();

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
    dispatch(getHome());
  }, [dispatch]);

  return (
    <section>
      <div className="p-8 bg-[#003580] pl-[350px]">
        <div className="flex flex-wrap items-center justify-between -mx-2">
          <div className="w-full md:w-auto px-2 mb-6 md:mb-0">
            <h4
              className="text-2xl font-bold text-white leading-5 capitalize "
              contenteditable="false"
            >
              {location.pathname === "/b2b" ? (
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
                <>Agent</>
              ) : location.pathname === "/b2b/reseller/add" ? (
                <span className="flex items-center gap-1">
                  <span>
                    <RiUserAddFill />
                  </span>
                  <span>New Agent</span>
                </span>
              ) : location.pathname === "/b2b/settings" ? (
                <>Settings</>
              ) : (
                ""
              )}
            </h4>
          </div>
          <div className="w-full md:w-auto px-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
