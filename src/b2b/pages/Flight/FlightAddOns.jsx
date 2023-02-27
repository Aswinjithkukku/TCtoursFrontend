import React from "react";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiLuggageCartLine } from "react-icons/ri";

const FlightAddOns = ({ navigation, setNavigation }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setNavigation({
      itenary: false,
      details: true,
      payment: false,
      addOns: false,
    });
  };

  return (
    <div className="p-6 text-darktext">
      <form onSubmit={submitHandler}>
        <div
          className={`my-2 border px-3 py-4 ${
            navigation.addOns ? "bg-lightblue " : "bg-slate-400"
          } rounded-[.25rem]`}
          onClick={() => {
            navigation.addOns &&
              setNavigation({
                itenary: false,
                details: true,
                payment: false,
                addOns: false,
              });
          }}
        >
          <p className="font-[600] text-[20px] text-soft">Add-Ons</p>
        </div>
        {navigation.addOns && (
          <div className="rounded-md shadow bg-white p-6">
            <div className="h-[200px] w-[100%] flex flex-col gap-y-2">
              <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                <h2 className="flex gap-2 text-[18px] font-medium">
                  <span className="text-[25px]">
                    <MdOutlineAirlineSeatReclineExtra />{" "}
                  </span>{" "}
                  Choose seat that you want.
                </h2>
              </div>
              <div>
                <div className="h-[50px] min-w-[100px] bg-blue-50 max-w-[140px] flex items-center px-2 rounded-md cursor-pointer">
                  <span className="font-semibold text-[24px] ">E4</span>
                </div>
              </div>
              <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                <h2 className="flex gap-2 text-[18px] font-medium">
                  {" "}
                  <span className="text-[25px]">
                    {" "}
                    <GiMeal />
                  </span>{" "}
                  Add a delicious meal for your flight
                </h2>
              </div>
              <div></div>
              <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                <h2 className="flex gap-2 text-[18px] font-medium">
                  {" "}
                  <span className="text-[25px]">
                    <RiLuggageCartLine />{" "}
                  </span>{" "}
                  Add Extra Luggage
                </h2>
              </div>
              <div></div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-lightblue text-[14px] text-white px-3 py-2 rounded"
              >
                Move to Details
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FlightAddOns;
