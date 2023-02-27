import React from "react";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";

const FlightItinerary = ({ navigation, setNavigation }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setNavigation({
      itenary: false,
      addOns: true,
      details: false,
      upload: false,
    });
  };

  return (
    <div className="p-6 text-darktext">
      <form onSubmit={submitHandler}>
        <div
          className={`my-2 border px-3 py-4 ${
            navigation.itenary ? "bg-lightblue " : "bg-slate-400"
          } rounded-[.25rem]`}
          onClick={() => {
            navigation.itenary &&
              setNavigation({
                itenary: false,
                addOns: true,
                details: false,
                upload: false,
              });
          }}
        >
          <p className="font-[600] text-[20px] text-soft">Itinerary</p>
        </div>
        {navigation.itenary && (
          <div className="rounded-md shadow bg-white p-6">
            <div className="">
              <div className="grid grid-cols-8 min-w-[400px] w-[90%] bg-white h-[140px] p-4 rounded-lg items-center cursor-pointer">
                <div className="col-span-1">
                  <div className=" grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI="
                      alt=""
                      className="h-[100px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 col-span-5  mb-2 gap-4 items-center  ">
                  <div className="flex flex-col col-span-2 items-end">
                    <span className="text-left text-[20px]">10:10</span>
                    <span className="text-left text-[12px] font-semibold text-blue-400">
                      Mumbai
                    </span>
                  </div>
                  <div className="col-span-6 flex items-center justify-center gap-1">
                    <span className="text-[20px]  mb-[14px] transform text-blue-500">
                      <MdOutlineFlightTakeoff />
                    </span>
                    <div className="border-t-2 w-[100%] border-dashed h-[1px] relative">
                      <span className="absolute bottom-3 text-[20px] right-[45%] transform rotate-90 text-blue-500">
                        <MdOutlineFlight />
                      </span>
                      <span className="absolute -bottom-6 text-[12px] right-[35%] w-[100px] text-teal-600  text-center">
                        2 Hr. 15 min
                      </span>
                    </div>
                    <span className="text-[20px]  mb-[14px] text-blue-500">
                      <MdOutlineFlightLand />
                    </span>
                  </div>
                  <div className="flex flex-col col-span-2 items-start">
                    <span className="text-left text-[20px]">12:30</span>
                    <span className="text-left text-[12px] font-semibold text-teal-500">
                      Delhi
                    </span>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col pl-4">
                  <h2 className="text-[12px] w-[100%]">Price : </h2>
                  <h2 className="text-[18px] font-semibold w-[100%]">
                    1200 AED
                  </h2>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-lightblue text-[14px] text-white px-3 py-2 rounded"
              >
                Move to Add-ons
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FlightItinerary;
