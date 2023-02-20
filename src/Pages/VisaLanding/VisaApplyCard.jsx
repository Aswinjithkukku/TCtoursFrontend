import React from "react";
import { useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillPersonFill, BsPhone } from "react-icons/bs";
import { FaChild, FaWpforms } from "react-icons/fa";
import { IoIosMan, IoIosPeople } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setb2cVisaEnquiry } from "../../redux/slices/b2cvisaSlice";

function VisaApplyCard({ visaDetails }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(null);

  const onChangeHandler = (e) => {
    let {
      target: { name, value },
    } = e;

    if (name === "selectedVisaType") {
      for (let x of visaDetails?.visaType) {
        if (x._id === value) {
          setPrice(x.visaPrice);
        }
      }
    }

    setFormData((state) => ({ ...state, [name]: value }));
  };

  const onApplyVisa = (e) => {
    e.preventDefault();
    if (formData?.selectedVisaType && formData?.travellersCount) {
      const details = { ...formData, ...visaDetails };
      localStorage.setItem("visaEnquiry", JSON.stringify(details));
      dispatch(setb2cVisaEnquiry({ ...details }));
      navigate("/visa/apply");
    }
  };

  return (
    <>
      <div className="">
        <div className="lg:border lg:border-lightblue mx-6 rounded-2xl px-5 py-7 lg:mt-5">
          <div className=" rounded-2xl space-y-4 border border-text px-4 relative">
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
            <form
              onSubmit={onApplyVisa}
              className="peer-checked:max-h-[100vh] max-h-0 transition-all duration-500 overflow-hidden"
            >
              <div className=" w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <AiOutlineMail />
                  </span>
                  <span className="text-lg">Email Id</span>
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                    placeholder="Email Id"
                    className="px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                    required
                  />
                </div>
              </div>
              <div className="pt-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <AiOutlineContacts />{" "}
                  </span>
                  <span className="text-lg">Contact No</span>
                </div>
                <div className="">
                  <input
                    type="number"
                    name="contactNo"
                    value={formData.contactNo}
                    placeholder="Contact No"
                    onChange={onChangeHandler}
                    required
                    className="px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  />
                </div>
              </div>
              <div className="pt-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <FaWpforms />{" "}
                  </span>
                  <span className="text-lg">Visa type</span>
                </div>
                <div className="">
                  <select
                    type="s"
                    name="selectedVisaType"
                    value={formData.selectedVisaType}
                    required
                    onChange={onChangeHandler}
                    placeholder="Visa type"
                    className="cursor-pointer px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  >
                    <option selected disabled>
                      choose one
                    </option>
                    {visaDetails?.visaType?.map((ele) => (
                      <>
                        <option value={ele?._id}>{ele.visaName}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" pt-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <IoIosPeople />{" "}
                  </span>
                  <span className="text-lg">Travellers</span>
                </div>
                <div className="">
                  <select
                    name="travellersCount"
                    value={formData.travellersCount}
                    required
                    onChange={onChangeHandler}
                    placeholder="Travellers"
                    className="cursor-pointer px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  >
                    <option selected disabled>
                      Travellers
                    </option>
                    {Array(9)
                      .fill(1)
                      .map((ele, i) => (
                        <option value={i + 1}>{i + 1}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-center font-medium lg:justify-end px-2 py-2 text-lg text-lightblue">
                {price && formData?.travellersCount
                  ? `AED ${+price * +formData.travellersCount}`
                  : "AED 0.00"}
              </div>
              <div className="  flex justify-end px-2 my-3 text-lg text-lightblue">
                <button
                  type="submit"
                  className="bg-blueColor w-full  text-light px-2 py-1 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="hidden lg:block rounded-2xl space-y-4 border border-text px-4 relative mt-5">
            <input
              type="checkbox"
              className="peer absolute top-5 w-full h-5 inset-x-0  cursor-pointer opacity-0"
            />
            <div className="flex justify-between text-lightblue ">
              <span className="text-xl">Let Us call You</span>
              <span className="text-xl">
                <AiOutlinePlus />{" "}
              </span>
            </div>
            <div className="peer-checked:max-h-[100vh] max-h-0 transition-all duration-500 overflow-hidden ">
              <div className="space-y-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <BsFillPersonFill />{" "}
                  </span>
                  <span className="text-lg">Name</span>
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="Name"
                    className="px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  />
                </div>
              </div>
              <div className="space-y-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <AiOutlineMail />
                  </span>
                  <span className="text-lg">Email</span>
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  />
                </div>
              </div>
              <div className="space-y-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className="text-lg text-lightblue">
                    <BsPhone />
                  </span>
                  <span className="text-lg">Phone Number</span>
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="Phone Number"
                    className="px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl bg-light text-text"
                  />
                </div>
              </div>
              <div className="flex justify-end px-2 my-3 text-lg text-lightblue">
                <button className="bg-blueColor text-light px-2 py-1 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaApplyCard;
