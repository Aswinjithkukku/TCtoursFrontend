import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import AdminDropdown from "./AdminDropdown";
import WalletDepositModal from "./WalletDepositModal";
import CurrencyModal from './CurrencyModal'
import { useHandleClickOutside } from "../../../hooks";
import { AiOutlineDown } from "react-icons/ai";

export default function Header() {
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
    const [walletDropdown, setWalletDropdown] = useState(false)
    const [currency, setCurrency] = useState(false)

    const { user } = useSelector((state) => state.users);
    const { selectedCurrency } = useSelector(state => state.home)

    const currencyRef = useRef()
    useHandleClickOutside(currencyRef, () => setCurrency(false))

    return (
        <>
            <div className="w-full bg-white h-[70px] px-5">
                <div className="h-full flex items-center justify-between">
                    <div></div>
                    <div className="h-full">
                        <div className="relative h-full flex">

                            <div
                                ref={currencyRef}
                                className="flex space-x-1 items-center cursor-pointer relative mr-4"
                                onClick={() => setCurrency(!currency)}
                            >
                                <span className="text-base font-medium">
                                    <img src={selectedCurrency ? selectedCurrency?.flag : ''} className="w-[32px]" />
                                </span>
                                <span className="text-sm">
                                {selectedCurrency ? selectedCurrency?.isocode : ''}
                                </span>
                                <span className="text-sm">
                                <AiOutlineDown />
                                </span>
                                {/* absolute modal */}
                                {currency && (
                                    <CurrencyModal setCurrency={setCurrency} currency={currency} />
                                )}
                                {/* absolute modal */}
                            </div>

                            <div className="bg-primaryColor h-[100%] flex gap-[10px] items-center px-[12px] cursor-pointer"
                                onClick={() => setWalletDropdown(!walletDropdown)} >
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
                            <div
                                className="bg-[#f3f3f9] h-[100%] flex gap-[10px] items-center px-[12px] cursor-pointer"
                                onClick={() => setIsAdminDropdownOpen(true)}
                            >
                                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                                    <img
                                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="">
                                    <span className="block text-sm font-medium">
                                        {user?.name}
                                    </span>
                                    <span className="block text-[12px] text-grayColor">
                                        {user?.email}
                                    </span>
                                </div>
                            </div>

                            {/* {isAdminDropdownOpen && (
                            <AdminDropdown
                                setIsAdminDropdownOpen={setIsAdminDropdownOpen}
                            />
                        )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
