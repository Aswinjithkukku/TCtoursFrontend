import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminDropdown from "./AdminDropdown";

export default function Header() {
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

    const { user } = useSelector((state) => state.users);

    return (
        <div className="w-full bg-white h-[70px] px-5">
            <div className="h-full flex items-center justify-between">
                <div></div>
                <div className="h-full">
                    <div className="relative h-full">
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
    );
}
