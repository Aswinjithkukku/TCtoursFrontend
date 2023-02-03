import React from "react";
import { BsPerson } from "react-icons/bs";
import { Month } from "../../utils/Month";
import TravellerDetailsForm from "./TravellerDetailsForm";

function TravellerDetails({ travellerInfo }) {
  const list = Array(+travellerInfo?.traveller).fill("traveller");
  console.log(list);
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
      <div className="my-2 border px-3 py-4 bg-primaryColor rounded-lg">
        <p className="font-[600] text-[20px] text-soft">Traveller Details</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-sm">
        {list?.map((ele, i) => (
          <div className="flex">
            <div className="flex  space-x-1 w-[150px]">
              <span>
                <BsPerson />
              </span>
              <span className="text-xs w-[100px]">
                {i === 0 ? "Leading Passenger" : `Traveller ${i + 1}`}
              </span>
            </div>
            <div>
              <TravellerDetailsForm />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravellerDetails;
