import React, { useState } from "react";
import AttractionCard from "./AttractionCard";
import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import VisaCard from "./VisaCard";
import CarCard from "./CarCard";
import { useLocation } from "react-router-dom";
import { setMenuStatus } from "../../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchCards() {
  const { b2bMenuStatus } = useSelector((state) => state.general);
  const location = useLocation();
  const dispatch = useDispatch();
  const [view, setView] = useState({
    attraction:
      location.pathname.includes("/b2b/visa") ||
      location.pathname.includes("/b2b/flight") ||
      location.pathname.includes("/b2b/hotel")
        ? false
        : true,
    flight: location.pathname.includes("/b2b/flight") ? true : false,
    hotel: location.pathname.includes("/b2b/hotel") ? true : false,
    visa: location.pathname.includes("/b2b/visa") ? true : false,
    transfer: false,
  });
  return (
    <>
      <div className=" w-full  ">
        <div className=" relative">
          <div className="  md:w-4/12  rounded-t-md md:rounded-t-md overflow-x-auto  scrollbar-hide">
            <div className=" flex md:grid md:grid-cols-2 space-x-1 px-1 py-3 md:py-1 items-center ">
              <div className="w-full mt-3">
                <ul className="flex -mb-4">
                  <li className="mb-4 mr-8">
                    <span
                      className={`inline-block pb-4 ${
                        view.attraction
                          ? " text-blue-500 border-blue-500  "
                          : " text-gray-400 border-transparent "
                      } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                      href="#"
                      onClick={() => {
                        setView((prev) => {
                          return {
                            ...prev,
                            attraction: true,
                            hotel: false,
                            visa: false,
                            transfer: false,
                            flight: false,
                          };
                        });
                        dispatch(
                          setMenuStatus({
                            attraction: true,
                            hotel: false,
                            visa: false,
                            transfer: false,
                            flight: false,
                          })
                        );
                      }}
                    >
                      Attractions
                    </span>
                  </li>
                  <li className="mb-4 mr-8">
                    <span
                      className={`inline-block pb-4 ${
                        view.visa
                          ? " text-blue-500 border-blue-500  "
                          : " text-gray-400 border-transparent "
                      } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                      href="#"
                      onClick={() => {
                        setView((prev) => {
                          return {
                            ...prev,
                            attraction: false,
                            hotel: false,
                            visa: true,
                            transfer: false,
                            flight: false,
                          };
                        });
                        dispatch(
                          setMenuStatus({
                            attraction: false,
                            hotel: false,
                            visa: true,
                            transfer: false,
                            flight: false,
                          })
                        );
                      }}
                    >
                      Visa
                    </span>
                  </li>
                  <li className="mb-4 mr-8">
                    <span
                      className={`inline-block pb-4 ${
                        view.flight
                          ? " text-blue-500 border-blue-500  "
                          : " text-gray-400 border-transparent "
                      } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                      href="#"
                      onClick={() => {
                        setView((prev) => {
                          return {
                            ...prev,
                            attraction: false,
                            hotel: false,
                            visa: false,
                            transfer: false,
                            flight: true,
                          };
                        });
                        dispatch(
                          setMenuStatus({
                            attraction: false,
                            hotel: false,
                            visa: false,
                            transfer: false,
                            flight: true,
                          })
                        );
                      }}
                    >
                      Flight
                    </span>
                  </li>
                  <li className="mb-4 mr-8">
                    <span
                      className={`inline-block pb-4 ${
                        view.hotel
                          ? " text-blue-500 border-blue-500  "
                          : " text-gray-400 border-transparent "
                      } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                      href="#"
                      onClick={() => {
                        setView((prev) => {
                          return {
                            ...prev,
                            attraction: false,
                            hotel: true,
                            visa: false,
                            transfer: false,
                            flight: false,
                          };
                        });
                        dispatch(
                          setMenuStatus({
                            attraction: false,
                            hotel: true,
                            visa: false,
                            transfer: false,
                            flight: false,
                          })
                        );
                      }}
                    >
                      Hotel
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center shadow-b-sm shadow-x-sm">
            <div className=" w-full mt-7 md:rounded-md relative ">
              <>
                {view.attraction && <AttractionCard />}

                {view.flight && b2bMenuStatus?.flight && <FlightCard />}
                {view.hotel && <HotelCard />}
                {view.visa && <VisaCard />}
                {view.transfer && <CarCard />}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCards;
