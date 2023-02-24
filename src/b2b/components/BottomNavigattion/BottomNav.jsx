import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { GiHamburgerMenu, GiPortal, GiWallet } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { RiMarkupFill, RiMenuUnfoldFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCardModal from "./SearchCardModal";

function BottomNav({ setSidebarView }) {
   const navigate = useNavigate();
   const location = useLocation();

   const [searchModal, setSearchModal] = useState(false);
   return (
      <>
         <div
            className={`${
               location.pathname.includes("/b2b/attractions/details/")
                  ? "hidden"
                  : "block"
            } lg:hidden fixed w-full bottom-0 bg-primaryColor text-white h-[60px] flex justify-center items-center`}
         >
            <div className="grid grid-cols-5 gap-4 px-2 w-full">
               <div className="flex justify-center items-center">
                  <div className="" onClick={() => setSidebarView(true)}>
                     <div className="flex justify-center items-center text-2xl">
                        <GiHamburgerMenu />
                     </div>
                     <div className="">
                        <p className="text-xs">Menu</p>
                     </div>
                  </div>
               </div>
               <div className=" flex justify-center items-center">
                  <div className="" onClick={() => navigate("/b2b/wallet")}>
                     <div className="flex justify-center items-center text-2xl">
                        <FaWallet />
                     </div>
                     <div className="">
                        <p className="text-xs">Wallet</p>
                     </div>
                  </div>
               </div>
               <div className=" flex justify-center items-center relative">
                  <div
                     className="absolute -top-9 w-[70px] h-[70px] bg-main rounded-full flex justify-center items-center"
                     onClick={() => navigate("/b2b")}
                  >
                     <div className="flex justify-center items-center text-3xl">
                        <GiPortal />
                     </div>
                  </div>
               </div>
               <div className=" flex justify-center items-center">
                  <div
                     className=""
                     onClick={() => navigate("/b2b/markup/attraction")}
                  >
                     <div className="flex justify-center items-center text-2xl">
                        <RiMarkupFill />
                     </div>
                     <div className="">
                        <p className="text-xs">Markup</p>
                     </div>
                  </div>
               </div>
               <div className=" flex justify-center items-center">
                  <div
                     className=""
                     onClick={() => navigate("/b2b/order/attraction")}
                  >
                     <div className="flex justify-center items-center text-2xl">
                        <IoMdCart />
                     </div>
                     <div className="">
                        <p className="text-xs">Orders</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {searchModal && (
            <>
               <div
                  className="lightglass absolute top-0 left-0 right-0 bottom-0 z-10"
                  onClick={() => setSearchModal(false)}
               ></div>
               <SearchCardModal
                  setSearchModal={setSearchModal}
                  searchModal={searchModal}
               />
            </>
         )}
      </>
   );
}

export default BottomNav;
