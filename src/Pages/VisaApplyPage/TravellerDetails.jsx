import React from "react";
import { useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addRows } from "../../redux/slices/b2cvisaSlice";
import TravellerDetailsForm from "./TravellerDetailsForm";

function TravellerDetails({ itenaryFlag, navigation, setNavigation }) {
  const dispatch = useDispatch();

  const visa = useSelector((state) => state.b2cVisa);
  const { rows } = visa;

  useEffect(() => {
    dispatch(addRows());
  }, [itenaryFlag]);

  let limit = new Date().getFullYear();
  let year = [];
  for (let i = limit; i > limit - 100; i--) {
    year.push(i);
  }

  let day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }

  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5">
      <div
        className={`my-2 border px-3 py-4  rounded-lg ${
          navigation?.details ? "bg-primaryColor " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Traveller Details</p>
      </div>
      {navigation?.details && (
        <div className="bg-white p-6 rounded-md shadow-sm">
          {rows?.map((ele, i) => (
            <div className="flex space-x-4 border-dashed border-b-2 border-gray-300 py-4">
              <div className="flex  space-x-1 w-[150px]">
                <span>
                  <BsPerson />
                </span>
                <span className="text-xs w-[100px]">
                  {i === 0 ? "Leading Passenger" : `Traveller ${i + 1}`}
                </span>
              </div>
              <div className="w-[100%] ">
                <TravellerDetailsForm index={i} info={ele} />
              </div>
            </div>
          ))}
          <div className=" flex justify-end mt-4">
            <button
              onClick={() => {
                setNavigation({ payment: !navigation.payment });
              }}
              className="bg-lightblue rounded-[.25rem] text-white px-5 h-9"
            >
              Go To Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TravellerDetails;
