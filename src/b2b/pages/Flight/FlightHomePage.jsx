import React, { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbArrowsRight } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import SearchCards from "../../components/Cards/SearchCards";
import VisaApplyCard from "../Visa/VisaApplyCard";
import FlightCard from "./FlightCard";
import FlightFilter from "./FlightFilter";

const FlightHomePage = () => {
  const [loading, setLoading] = useState(false);
  const { flightsData, travellers, tripType } = useSelector(
    (state) => state.flight
  );

  const [flights, setFlights] = useState([]);

  const totalTravellers =
    travellers.children + travellers.adult + travellers.infant;

  const Flight = ({ info }) => {
    return (
      <>
        <div className="max-w-[150px] flex flex-col justify-center px-4 items-center border-r-[1px]">
          <div className="flex gap-x-2">
            <div className="flex flex-col">
              <span className="font-semibold">{info?.cityFrom?.iata}</span>
              {/* <span className="text-[12px]">{info?.cityFrom?.name}</span> */}
            </div>
            <div className="text-[15px] text-blue-500 flex items-center">
              <TbArrowsRight />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{info?.cityTo?.iata}</span>
              {/* <span className="text-[12px]">{info?.cityTo?.name}</span> */}
            </div>
          </div>
          <div className="w-[100%] text-[12px] flex justify-center">
            {info?.departureDate}
          </div>
        </div>
      </>
    );
  };

  console.log(flightsData.length);

  const body = {
    from: flightsData[0]?.cityFrom.iata,
    to: flightsData[0].cityTo.iata,
    departureDate: new Date(flightsData[0].departureDate),
    returnDate: new Date(flightsData[0].returnDate),
    noOfAdults: travellers.adult,
    noOfChildren: travellers.children,
    noOfInfants: travellers.infant,
    type: tripType,
  };

  const fetchFlightsData = async () => {
    try {
      console.log("body", body);
      setLoading(true);
      const res = await axios.post(
        "https://flight.mytravellerschoice.com/api/v1/flights/search/availability",
        body
      );
      if (res.status === 200) {
        setFlights(res.data);
      }
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchFlightsData();
  }, []);

  return (
    <>
      <div className="min-h-[100vh] mt-4">
        <div className=" w-[100%] h-[80px] px-10 flex  ">
          <div className=" w-[100%] h-[80px] flex justify-between rounded-lg border-[1px]">
            <div className=" w-[100%] h-[100%] flex ">
              <div className="">
                {flightsData.length === 1 ? (
                  <div className="max-w-[240px] flex justify-center px-4 items-center border-r-[1px] h-[100%] gap-x-6 ">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {flightsData?.[0]?.cityFrom?.iata}
                      </span>
                      <span className="text-[12px]">
                        {flightsData?.[0]?.cityFrom?.name}
                      </span>
                    </div>
                    <div className="text-[20px] text-blue-500 flex items-center">
                      <TbArrowsRight />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {flightsData?.[0]?.cityTo?.iata}
                      </span>
                      <span className="text-[12px]">
                        {flightsData?.[0]?.cityTo?.name}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className=" w-[100%] h-[100%] flex ">
                      {flightsData?.map((ele) => (
                        <>
                          <Flight info={ele} />
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {flightsData.length === 1 && (
                <div className="max-w-[150px] flex flex-col px-4 justify-center border-r-[1px] ">
                  <span className="text-[12px]">Departure Date</span>
                  <span className="text-[16px]  tracking-[2px] font-medium">
                    {flightsData?.[0]?.departureDate}
                  </span>
                </div>
              )}
              <div className="max-w-[150px] flex flex-col px-4 justify-center ">
                <span className="text-[12px]">Travellers</span>
                <span className="text-[18px] font-medium tracking-[2px]">
                  {totalTravellers < 10 && "0"}
                  {totalTravellers}
                </span>
              </div>
            </div>
            <div className="flex items-center px-4">
              <button className="h-10 px-4 py-2 bg-blue-500 text-white rounded-md">
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 flex justify-center mt-4 ">
          <div className="w-[100%] bg-white flex rounded-md px-10 relative">
            <div className="text-[30px] cursor-pointer text-blue-500 absolute top-0 left-0 h-[100%] w-[40px] grid place-items-center border-r-2">
              <AiFillCaretLeft />
            </div>
            <div className="text-[30px] cursor-pointer text-blue-500 absolute top-0 right-0 h-[100%] w-[40px] grid place-items-center border-l-2">
              <AiFillCaretRight />
            </div>
            <div className="flex border-b-[1px] min-w-[100%]">
              {Array.from({ length: 10 }).map((ele, i) => (
                <>
                  <div
                    className={`py-5 flex h-[100%] flex-col px-8 items-center min-w-[146px] cursor-pointer ${
                      i === 0 && "border-b-2 border-blue-400"
                    }`}
                  >
                    <h2 className="text-[14px]">Mon, 27 Feb</h2>
                    <h2 className="font-medium">AED 234</h2>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-[100%] grid grid-cols-8 p-10 gap-5">
          <div className="col-span-2">
            <FlightFilter />
            <div className="w-[100%]">
              <VisaApplyCard />
            </div>
          </div>
          <div className=" flex flex-wrap col-span-6 flex-col items-center ">
            <div className="grid grid-cols-8 min-w-[400px] w-[90%] bg-white h-[60px] p-4 rounded-lg items-center mb-4 shadow-lg">
              <div className="col-span-1">
                <div className=" grid place-items-center">Airlines</div>
              </div>
              <div className="grid grid-cols-10 col-span-5  gap-4  ">
                <div className="col-span-2 flex justify-end">
                  <div className=" grid place-items-center">Departure</div>
                </div>
                <div className="col-span-6 ">
                  <div className=" grid place-items-center">Duration</div>
                </div>
                <div className="col-span-2 flex justify-start ">
                  <div className=" grid place-items-center">Arrival</div>
                </div>
              </div>
              <div className="col-span-1 flex justify-start items-center pl-4">
                Price
              </div>
              <div className="col-span-1 flex justify-center items-center"></div>
            </div>
            {loading && (
              <>
                <div className="animate-pulse w-[90%]">
                  <FlightCard />
                </div>
              </>
            )}

            {!loading &&
              flights?.map((ele, i) => (
                <>
                  <div className=" w-[90%] flex flex-col gap-4 ">
                    <FlightCard index={i} data={ele} />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightHomePage;
