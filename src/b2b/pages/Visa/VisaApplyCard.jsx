import React, { useEffect, useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
// import priceConversion from "../../../utils/PriceConversion"

function VisaApplyCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    email: "",
    phoneNumber: "",
    visaType: "",
    traveller: "",
  });
  const [price, setPrice] = useState(0);

  const { visa } = useSelector((state) => state.visa);
  const { home } = useSelector((state) => state.general);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data.visaType);
  const submitHandler = () => {
    localStorage.setItem("visaEnquiry", JSON.stringify(data));
    navigate(`/b2b/visa/${id}/apply`);
  };

  let day = [];
  for (let i = 1; i <= 9; i++) {
    day.push(i);
  }

  useEffect(() => {
    if (data.visaType !== "") {
      visa?.visaType?.filter((item) => {
        if (item?._id === data?.visaType) {
          let sum = item?.totalPrice + item?.tax;
          sum = sum * Number(data?.traveller);
          setPrice(sum);
        }
      });
    }
  }, [data]);

  return (
    <>
      <div className="">
        <div className="  lg:bg-[#f4f7ff] shadow mx-6 rounded-2xl px-5 py-7 lg:mt-5">
          <div className=" rounded-2xl space-y-4 shadow-sm p-1 bg-white  px-4 relative">
            <input
              type="checkbox"
              className="peer absolute top-5 w-full h-5 inset-x-0  cursor-pointer opacity-0"
              defaultChecked
            />
            <div className="flex justify-between text-lightblue ">
              <span className="text-xl">Apply Online</span>
              <span className="text-xl">
                <AiOutlinePlus />{" "}
              </span>
            </div>
            <div className="peer-checked:max-h-[100vh] max-h-0 transition-all duration-500 overflow-hidden">
              <form onSubmit={submitHandler} className="space-y-2">
                <div className="space-y-2 w-full px-2">
                  <div className="flex items-center space-x-2 text-lightblue">
                    <span className="text-lg text-lightblue">
                      <AiOutlineMail />
                    </span>
                    <span className="text-lg">Email Id</span>
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email Id"
                      className="px-3 w-full border-none placeholder:text-text py-2 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                      name="email"
                      value={data.email}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 w-full px-2">
                  <div className="flex items-center space-x-2 text-lightblue">
                    <span className="text-lg text-lightblue">
                      <AiOutlineContacts />{" "}
                    </span>
                    <span className="text-lg">Contact No</span>
                  </div>
                  <div className="">
                    <input
                      type="number"
                      placeholder="Contact No"
                      className="no-spinner px-3 w-full border-none placeholder:text-text py-2 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                      name="contactNo"
                      value={data.contactNo}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 w-full px-2">
                  <div className="flex items-center space-x-2 text-lightblue">
                    <span className="text-lg text-lightblue">
                      <FaWpforms />{" "}
                    </span>
                    <span className="text-lg">Visa type</span>
                  </div>
                  <div className="">
                    <select
                      placeholder="Visa type"
                      className="px-3 w-full border-none placeholder:text-text py-2 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                      name="visaType"
                      value={data.visaType}
                      onChange={onChangeHandler}
                      required
                    >
                      <option hidden>choose one</option>
                      {visa?.visaType?.map((item, index) => (
                        <option key={index} value={item?._id}>
                          {item?.visaName}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2 w-full px-2">
                  <div className="flex items-center space-x-2 text-lightblue">
                    <span className="text-lg text-lightblue">
                      <IoIosPeople />{" "}
                    </span>
                    <span className="text-lg">Travellers</span>
                  </div>
                  <div className="">
                    <select
                      placeholder="Travellers Number"
                      className="px-3 w-full border-none placeholder:text-text py-2 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                      name="traveller"
                      value={data.traveller}
                      onChange={onChangeHandler}
                      required
                    >
                      <option hidden>choose one</option>
                      {day.map((item, index) => (
                        <option key={index} value={item}>
                          {item}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center font-medium lg:justify-end px-2 py-2 text-lg text-lightblue">
                  {price} AED
                </div>
                <div className="flex justify-end px-2 my-3 text-lg text-lightblue">
                  <button
                    type="submit"
                    className="bg-blue w-full  text-light px-2 py-1 rounded-md mb-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:block rounded-2xl space-y-4 bg-white shadow-sm p-1 px-4 relative mt-5">
            <input
              type="checkbox"
              className="peer absolute top-5 w-full h-5 inset-x-0  cursor-pointer opacity-0"
            />
            <div className="flex justify-between text-lightblue ">
              <span className="text-xl">Contact Us</span>
              <span className="text-xl">
                <AiOutlinePlus />{" "}
              </span>
            </div>
            <div className="peer-checked:max-h-[100vh] max-h-0 transition-all duration-500 overflow-hidden space-y-3">
              <div className="space-y-1 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <BsPhone />
                  </span>
                  <span className="text-xs uppercase">Phone Number</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">+{home?.phoneNumber1} </p>
                </div>
              </div>
              <div className="space-y-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <BsPhone />
                  </span>
                  <span className="text-xs uppercase">Phone Number</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">+{home?.phoneNumber2} </p>
                </div>
              </div>
              <div className="space-y-2 w-full px-2  mb-3">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <MdEmail />
                  </span>
                  <span className="text-xs uppercase">Email Id</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">{home?.email} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaApplyCard;
