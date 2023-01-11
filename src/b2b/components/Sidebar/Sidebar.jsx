import React from "react";
import { Link } from "react-router-dom";

import SidebarMenu from "./SidebarMenu";
import { sidebarMenus } from "../../data";

export default function Sidebar() {
    return (
        <div className="sidebar top-0 left-0 flex h-[100vh] w-[250px] fixed bg-primaryColor flex-col transition-all ">
            <Link to="/" className="flex items-center justify-center py-5">
                <h2 className="text-lg font-[600] text-white uppercase">
                    Travellers{" "}
                    <span className="text-sm text-red-500">Choice</span>
                </h2>
            </Link>

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
    );
}
