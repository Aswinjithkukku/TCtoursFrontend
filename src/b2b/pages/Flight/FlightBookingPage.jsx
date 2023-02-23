import React from "react";
import SearchCards from "../../components/Cards/SearchCards";

const FlightBookingPage = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="p-2 lg:p-6">
        <div className="">
          <SearchCards />
        </div>
      </div>
      <div className="min-h-[80vh] w-[100%] grid grid-cols-4 p-10 gap-5">
        {/* <div className="bg-white"></div> */}
        <div className=" flex flex-wrap col-span-3"></div>
      </div>
    </div>
  );
};

export default FlightBookingPage;
