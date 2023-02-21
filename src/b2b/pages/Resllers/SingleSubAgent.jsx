import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdAccountBalanceWallet, MdClose } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrMoney, GrCurrency } from "react-icons/gr";
import { BsBuilding } from "react-icons/bs";
import { FiCheck, FiUser } from "react-icons/fi";
import { FaSkype, FaWhatsapp } from "react-icons/fa";

import { avatarpng } from "../../../static/images";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { PageLoader } from "../../components";
import formatDate from "../../../utils/formatDate";
import { fetchSingleReseller } from "../../../redux/slices/resellerSlice";

export default function SingleSubAgent() {
    const dispatch = useDispatch()

    // const [reseller, setReseller] = useState({});
    // const [isPageLoading, setIsPageLoading] = useState(true);
    const [isStatusLoading, setIsStatusLoading] = useState(false);

    const { id } = useParams();
    const { reseller, loading } = useSelector((state) => state.resellers);


    useEffect(() => {
        dispatch(fetchSingleReseller(id));
    }, [dispatch]);

    return (
        <div>

            {loading ? (
                <PageLoader />
            ) : (
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                        <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                            <img
                                src={avatarpng}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <span className="block font-[600] text-lg">
                                {reseller?.name}
                            </span>
                            <span className="block text-sm text-grayColor">
                                {reseller?.createdAt && formatDate(reseller?.createdAt)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <span className="text-sm text-grayColor">Agent Code</span>
                            <span className="ml-3 text-center font-medium mt-1">{reseller?.agentCode}</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-6 text-darktext">
                    <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between">
                        <div>
                            <span className="block text-lg font-[600]">
                                0 AED
                            </span>
                            <span className="block text-sm text-grayColor font-medium mt-[2px]">
                                Available Balance
                            </span>
                        </div>
                        <span className="text-3xl">
                            <MdAccountBalanceWallet />
                        </span>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between">
                        <div>
                            <span className="block text-lg font-[600]">
                                0 AED
                            </span>
                            <span className="block text-sm text-grayColor font-medium mt-[2px]">
                                Total Earnings
                            </span>
                        </div>
                        <span className="text-3xl">
                            <GiTakeMyMoney />
                        </span>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between">
                        <div>
                            <span className="block text-lg font-[600]">
                                0 AED
                            </span>
                            <span className="block text-sm text-grayColor font-medium mt-[2px]">
                                Pending Earnings
                            </span>
                        </div>
                        <span className="text-3xl">
                            <GrMoney />
                        </span>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between">
                        <div>
                            <span className="block text-lg font-[600]">
                                0 AED
                            </span>
                            <span className="block text-sm text-grayColor font-medium mt-[2px]">
                                Total Withdrawal
                            </span>
                        </div>
                        <span className="text-3xl">
                            <GrCurrency />
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded shadow-sm mt-6">
                    <div className="flex items-center gap-[13px] px-4 border-b border-b-dahsed">
                        <button className="px-2 py-4 h-auto bg-transparent text-textColor font-medium border-b border-b-orange-500 rounded-none">
                            Details
                        </button>
                        <button className="px-2 py-4 h-auto bg-transparent text-textColor font-medium rounded-none">
                            Transactions
                        </button>
                        <button className="px-2 py-4 h-auto bg-transparent text-textColor font-medium rounded-none">
                            Attraction Orders
                        </button>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-[20px]">
                        <div>
                            <div className="flex items-center gap-[8px] mb-3">
                                <span>
                                    <BsBuilding />
                                </span>
                                <span className="font-[600] text-[15px] ">
                                    Company Details
                                </span>
                            </div>
                            <div className="">
                                <span className="block text-[12px] text-grayColor">
                                    Company Name
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.companyName}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Address
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.address}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Website
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.website}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Location
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.city}
                                    {reseller?.zipcode &&
                                        `, ${reseller?.zipcode}`}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Country
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.country?.countryName}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-[8px] mb-3">
                                <span>
                                    <FiUser />
                                </span>
                                <span className="font-[600] text-[15px]">
                                    Profile Details
                                </span>
                            </div>
                            <div className="">
                                <span className="block text-[12px] text-grayColor">
                                    Name
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.name}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Phone Number
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.country?.phonecode}{" "}
                                    {reseller?.phoneNumber}
                                </span>
                                <span className="block text-[15px] mt-[2px]">
                                    {reseller?.telephoneNumber}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Email
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.email}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Designation
                                </span>
                                <span className="block text-[15px]">
                                    {reseller?.designation}
                                </span>
                            </div>
                            <div className="mt-3">
                                <span className="block text-[12px] text-grayColor">
                                    Socail
                                </span>
                                {reseller?.skypeId && (
                                    <span className="text-[15px] flex items-center gap-[10px]">
                                        <FaSkype /> {reseller?.skypeId}
                                    </span>
                                )}
                                {reseller?.whatsappNumber && (
                                    <span className="text-[15px] flex items-center gap-[10px] mt-1">
                                        <FaWhatsapp />{" "}
                                        {reseller?.country?.phonecode}{" "}
                                        {reseller?.whatsappNumber}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            )}
        </div>
    );
}
