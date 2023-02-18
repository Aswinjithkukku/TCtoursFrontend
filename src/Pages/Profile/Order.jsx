import React from "react";
import { useState } from "react";
import OrderListSection from "./OrderListSection";
import ProfileSidebar from "./ProfileSidebar";

function Order() {
  const [navigation, setNavigation] = useState(0);
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto py-10 ">
      <div className="lg:flex lg:gap-5 space-y-2 lg:space-y-0">
        <div className="lg:w-3/12  ">
          <ProfileSidebar />
        </div>
        <div className="lg:w-9/12">
          <div className="">
            <div className="bg-white rounded-xl shadow-sm p-4 grid grid-cols-5">
              <div
                className=""
                onClick={() => {
                  setNavigation(0);
                }}
              >
                <h1
                  className={`${
                    navigation === 0 && "font-[600]"
                  } text-gray-700 text-lg cursor-pointer`}
                >
                  Attraction
                </h1>
              </div>
              <div
                className=""
                onClick={() => {
                  setNavigation(1);
                }}
              >
                <h1
                  className={`${
                    navigation === 1 && "font-[600]"
                  } text-gray-700 text-lg cursor-pointer`}
                >
                  Visa
                </h1>
              </div>
              <div
                className=""
                onClick={() => {
                  setNavigation(2);
                }}
              >
                <h1
                  className={`${
                    navigation === 2 && "font-[600]"
                  } text-gray-700 text-lg cursor-pointer`}
                >
                  Hotel
                </h1>
              </div>
              <div
                className=""
                onClick={() => {
                  setNavigation(3);
                }}
              >
                <h1
                  className={`${
                    navigation === 3 && "font-[600]"
                  } text-gray-700 text-lg cursor-pointer`}
                >
                  Flight
                </h1>
              </div>
              <div
                className=""
                onClick={() => {
                  setNavigation(4);
                }}
              >
                <h1
                  className={`${
                    navigation === 4 && "font-[600]"
                  } text-gray-700 text-lg cursor-pointer`}
                >
                  Transfer
                </h1>
              </div>
            </div>
            <OrderListSection navigation={navigation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
