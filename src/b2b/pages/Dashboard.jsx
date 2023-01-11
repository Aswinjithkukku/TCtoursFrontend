import React from "react";
import { useSelector } from "react-redux";

import {
    bookingCancelledPng,
    bookingConfirmedPng,
    bookingReceivedPng,
    ticketBoughtPng,
    ticketCancelledPng,
    ticketConfirmedPng,
    totalRevenuePng,
    usersPng,
} from "../../static/imagesB2B";
import TopCard from "../components/features/TopCard";
import WalletCard from "../components/features/WalletCard";

export default function Dashboard() {
    // const { admin } = useSelector((state) => state.admin);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between gap-[10px] mb-5">
                <div>
                    <span className="font-medium text-textColor">
                        Good morning, name
                    </span>
                    <span className="block mt-1 text-[13px] text-grayColor">
                        Here's what's happening with your website today.
                    </span>
                </div>
                <div>
                    <select name="" id="" className="w-[150px]">
                        <option value="">All Time</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
            <WalletCard
                    title={"Wallet Balance"}
                    value={300}
                    link="/b2b/wallet"
                    linkText="View all details"
                    icon={totalRevenuePng}
                    isAmount={true}
                />
            <WalletCard
                    title={"Add to Wallet"}
                    value={300}
                    link="/b2b/wallet"
                    linkText="Add to wallet"
                    icon={totalRevenuePng}
                    isAmount={true}
                />
            <WalletCard
                    title={"Withdraw form wallet"}
                    value={300}
                    link="/b2b/wallet"
                    linkText="Withdraw from wallet"
                    icon={totalRevenuePng}
                    isAmount={true}
                />
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
                <TopCard
                    title={"Total Revenue"}
                    value={300}
                    link="/"
                    linkText="View all details"
                    icon={totalRevenuePng}
                    isAmount={true}
                />
                <TopCard
                    title={"Total Booking Received"}
                    value={3}
                    link="/"
                    linkText="View all booking"
                    icon={bookingReceivedPng}
                />
                <TopCard
                    title={"Total Booking Confimed"}
                    value={2}
                    link="/"
                    linkText="View all booking"
                    icon={bookingConfirmedPng}
                />
                <TopCard
                    title={"Total Booking Cancelled"}
                    value={1}
                    link="/"
                    linkText="View all booking"
                    icon={bookingCancelledPng}
                />
                <TopCard
                    title={"Total Users Signed"}
                    value={20}
                    link="/"
                    linkText="View all booking"
                    icon={usersPng}
                />
                <TopCard
                    title={"Total Ticket Bought"}
                    value={10}
                    link="/"
                    linkText="View all booking"
                    icon={ticketBoughtPng}
                />
                <TopCard
                    title={"Total Ticket Confirmed"}
                    value={6}
                    link="/"
                    linkText="View all booking"
                    icon={ticketConfirmedPng}
                />
                <TopCard
                    title={"Total Ticket Cancelled"}
                    value={4}
                    link="/"
                    linkText="View all booking"
                    icon={ticketCancelledPng}
                />
            </div>

        </div>
    );
}
