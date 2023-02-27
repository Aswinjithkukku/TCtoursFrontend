import React from "react";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";
import { TbArrowRight, TbArrowsRight } from "react-icons/tb";

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
          <div className="rounded-md shadow  p-6">
            <div className=" ">
              <div className="border-b-2 pb-1">
                <div className="flex gap-4 items-center ">
                  <div>
                    <span className="text-[20px] font-semibold text-darktext">
                      Mumbai
                    </span>
                  </div>
                  <div>
                    <span className="text-[20px] font-semibold text-darktext">
                      <TbArrowsRight />{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-[20px] font-semibold text-darktext">
                      Delhi
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-10 items-center ">
                  <div>
                    <span className="text-[12px] text-darktext">
                      Tuesday, Feb 28
                    </span>
                  </div>
                  <div>
                    <span className="text-[12px] text-darktext">
                      Wednesday, Feb 29
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mt-2 ">
                <div className="p-1">
                  <img
                    src="https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI="
                    alt=""
                    className="h-[40px]"
                  />
                </div>
                <div className="flex items-end">
                  <span>Air India</span>
                </div>
              </div>
              <div className=""></div>
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
