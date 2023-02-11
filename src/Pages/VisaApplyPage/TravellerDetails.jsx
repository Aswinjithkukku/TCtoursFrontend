import React from "react";
import { useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "../../axios";
import { addb2cRows } from "../../redux/slices/b2cvisaSlice";
import TravellerDetailsForm from "./TravellerDetailsForm";

function TravellerDetails({ itenaryFlag, navigation, setNavigation }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.agents);
  const visa = useSelector((state) => state.b2cVisa);
  const { rows, visaEnquiry } = visa;

  useEffect(() => {
    dispatch(addb2cRows());
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const body = {
        visaType: visaEnquiry?.selectedVisaType,
        email: visaEnquiry?.email,
        contactNo: visaEnquiry?.contactNo,
        onwardDate: visaEnquiry?.fromDate,
        returnDate: visaEnquiry?.toDate,
        noOfTravellers: visaEnquiry?.travellersCount,
        travellers: rows,
        country: rows[0]["country"],
      };

      const data = await axios.post("visa/application/create", body, config);

      if (data.status === 200) {
        localStorage.setItem("visaOrder", JSON.stringify(data.data));
        setNavigation({ payment: !navigation.payment });
        Swal.fire({
          icon: "success",
          title: "VISA Application Created Successfully",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: data?.data?.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: error.message,
      });
    }
  };

  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5">
      <div
        className={`my-2 border px-3 py-4  rounded-lg ${
          navigation?.details ? "bg-primaryColor " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Traveller Details</p>
      </div>
      <form action="" onSubmit={handleFormSubmit}>
        {navigation?.details && (
          <div className="bg-white p-6 rounded-md shadow-sm">
            {rows?.map((ele, i) => (
              <div
                key={`form_${i}`}
                className="flex space-x-4 border-dashed border-b-2 border-gray-300 py-4"
              >
                <div className="flex  space-x-1 w-[150px]">
                  <span>
                    <BsPerson />
                  </span>
                  <span className="text-xs w-[100px]">
                    {i === 0 ? "Leading Passenger" : `Traveller ${i + 1}`}
                  </span>
                </div>
                <div className="w-[100%] ">
                  <TravellerDetailsForm index={i} info={ele} key={`a-${i}`} />
                </div>
              </div>
            ))}
            <div className=" flex justify-end mt-4">
              <button
                type="submit"
                className="bg-lightblue rounded-[.25rem] text-white px-5 h-9"
              >
                Submit Application
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default TravellerDetails;
