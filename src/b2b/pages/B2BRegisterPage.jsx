import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2Week, BsFillCartCheckFill } from "react-icons/bs";
import { FaHandsHelping, FaLock } from "react-icons/fa";
import { GiClockwork, GiFactory, GiReceiveMoney } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { ImFilePdf, ImProfile } from "react-icons/im";
import { IoIosPricetags } from "react-icons/io";
import { TfiPackage } from "react-icons/tfi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { logoPng } from "../../static/imagesB2B";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios.js";
import { setAgent, setRegisterAgent } from "../../redux/slices/agentSlice";
import { BtnLoader, InfoModal } from "../components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";

function B2BRegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    comapny: true,
    profile: false,
    password: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState({
    companyName: "",
    address: "",
    website: "",
    country: "",
    trnNumber: "",
    companyRegistration: "",
    city: "",
    zipCode: "",
    name: "",
    phoneNumber: "",
    telephoneNumber: "",
    email: "",
    designation: "",
    skypeId: "",
    whatsappNumber: "",
    password: "",
  });
  const [showPassword, setShowPasword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [info, setInfo] = useState(false);
  const [result, setResult] = useState({});

  const { countries } = useSelector((state) => state.home);

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      if (data.password !== confirmPassword) {
        setError("password you have entered is not similiar");
      }
      if (data.password === confirmPassword) {
        setIsLoading(true);

        const response = await axios.post("/b2b/resellers/auth/signup", data);
        dispatch(setRegisterAgent(response.data));
        setResult(response.data);
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Successfully Regsitered",
          text: "You should wait until allow approve",
          timer: 1000,
        });
        setInfo(true);
      }
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong, Try again");
      setIsLoading(false);
    }
  };

  const country = countries?.filter((item) => item._id === data.country);

  const { isLoggedIn } = useSelector((state) => state.agents);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/b2b");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <section className="relative py-10 min-h-screen">
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw0fHxkdWJhaXxlbnwwfHx8fDE2NzY3NTMwMDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
            alt=""
          />
          <div className="relative p-20">
            <Link className="inline-block mb-56" to="#"></Link>
            <div className="max-w-xl">
              <p className="text-3xl font-semibold text-white leading-10 mb-8">
                Travellers Choice B2B Portal is easy to use and has a lot of
                great features that make it a valuable tool for any Agents.
              </p>
              <div className="flex items-center mb-12">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="lg:w-1/2">
            <div className="relative max-w-xs lg:max-w-md mx-auto text-center">
              <Link className="inline-block h-14 mx-auto mb-5" to="/">
                <img className="block h-full" src={logoPng} alt="logo" />
              </Link>
              <form onSubmit={handleSubmit}>
                {!info ? (
                  <div className="1 col-span-7 text-darktext space-y-2 text-sm">
                    <ol className="relative  border-l border-gray-200 ">
                      <li
                        className={`mb-10 ml-6 ${
                          register.comapny ? "h-full" : "h-6"
                        } overflow-hidden `}
                      >
                        <span
                          className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                            register.comapny ? "bg-green-200" : "bg-gray-100"
                          } `}
                          onClick={() =>
                            setRegister({
                              comapny: true,
                              profile: false,
                              password: false,
                            })
                          }
                        >
                          {register.comapny ? (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                              <path
                                fillRule="evenodd"
                                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </span>
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            setRegister({
                              comapny: true,
                              profile: false,
                              password: false,
                            })
                          }
                        >
                          <h2 className="text-[15px] uppercase font-semibold tracking-wide space-x-2 flex pt-2">
                            <span className="">
                              <GiFactory />{" "}
                            </span>
                            <span className="">Company Details</span>
                          </h2>
                        </div>

                        <div className=" space-y-5  pt-3">
                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Travel Agency Name
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Ex: TravellerChoice"
                              name="companyName"
                              value={data.companyName}
                              onChange={onChangeHandler}
                              required
                            />
                          </div>
                          <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Address
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Ex: Tc, North california"
                              name="address"
                              value={data.address}
                              onChange={onChangeHandler}
                              autoComplete="off"
                            />
                          </div>
                          <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Website
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Ex: TravellerChoice.ae"
                              name="website"
                              value={data.website}
                              onChange={onChangeHandler}
                            />
                          </div>

                          <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Nationality
                            </span>
                            <select
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              name="country"
                              value={data.country}
                              onChange={onChangeHandler}
                            >
                              <option className="text-text" hidden>
                                select country
                              </option>
                              {countries?.map((item, index) => (
                                <option
                                  className="capitalize"
                                  value={item?._id}
                                  key={index}
                                >
                                  {item?.countryName}{" "}
                                </option>
                              ))}
                            </select>
                          </div>
                          {data.country === "63ac33ecff04e5652a2583f5" && (
                            <>
                              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                  TRN Number
                                </span>
                                <input
                                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                  type="number"
                                  placeholder="Ex: Dubai"
                                  name="trnNumber"
                                  value={data.trnNumber}
                                  onChange={onChangeHandler}
                                />
                              </div>
                              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                  Company Registration Number
                                </span>
                                <input
                                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                  type="number"
                                  placeholder="Ex: Dubai"
                                  name="companyRegistration"
                                  value={data.companyRegistration}
                                  onChange={onChangeHandler}
                                />
                              </div>
                            </>
                          )}
                          <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              City
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Ex: Dubai"
                              name="city"
                              value={data.city}
                              onChange={onChangeHandler}
                            />
                          </div>
                          {data.country !== "63ac33ecff04e5652a2583f5" && (
                            <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                Zip Code
                              </span>
                              <input
                                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                type="number"
                                placeholder=""
                                name="zipCode"
                                value={data.zipCode}
                                onChange={onChangeHandler}
                              />
                            </div>
                          )}
                        </div>
                      </li>
                      <li
                        className={`mb-10 ml-6 ${
                          register.profile ? "h-full" : "h-8"
                        } overflow-hidden `}
                      >
                        <span
                          className={`absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white ${
                            register.profile ? "bg-green-200" : "bg-gray-100"
                          }`}
                          onClick={() =>
                            setRegister({
                              comapny: false,
                              profile: true,
                              password: false,
                            })
                          }
                        >
                          {register.profile ? (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </span>
                        <div
                          className="pt-2 cursor-pointer"
                          onClick={() =>
                            setRegister({
                              comapny: false,
                              profile: true,
                              password: false,
                            })
                          }
                        >
                          <h2 className="text-[15px] uppercase font-semibold tracking-wide space-x-2 flex">
                            <span className="">
                              <GoPerson />{" "}
                            </span>
                            <span className="">Profile Details</span>
                          </h2>
                        </div>

                        <div className=" space-y-5 pt-5">
                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Agent Name
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Ex: Name"
                              name="name"
                              value={data.name}
                              onChange={onChangeHandler}
                            />
                          </div>
                          <div className=" flex space-x-1">
                            <div className="relative w-3/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                Code
                              </span>
                              <input
                                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                value={
                                  country?.map((item) => item?.phonecode) || ""
                                }
                                readOnly
                              />
                            </div>

                            <div className="relative w-9/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                Number
                              </span>
                              <input
                                className="block no-spinner w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                type="number"
                                placeholder="Ex: 0000000000"
                                name="phoneNumber"
                                value={data.phoneNumber}
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>

                          <div className=" flex space-x-1">
                            <div className="relative w-3/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                Code
                              </span>
                              <input
                                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                value={
                                  country?.map((item) => item?.phonecode) || ""
                                }
                                readOnly
                              />
                            </div>
                            <div className="relative w-9/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                                Telephone Number
                              </span>
                              <input
                                className="block no-spinner w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                                type="number"
                                placeholder="Ex: 0000000000"
                                name="telephoneNumber"
                                value={data.telephoneNumber}
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>

                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Email
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="email"
                              placeholder="Ex: example@email.com"
                              name="email"
                              value={data.email}
                              onChange={onChangeHandler}
                            />
                          </div>

                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Designation
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="Designation"
                              name="designation"
                              value={data.designation}
                              onChange={onChangeHandler}
                            />
                          </div>
                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Skype Id
                            </span>
                            <input
                              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              placeholder="skypeid"
                              name="skypeId"
                              value={data.skypeId}
                              onChange={onChangeHandler}
                            />
                          </div>

                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Whatsapp
                            </span>
                            <input
                              className="block no-spinner w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="number"
                              placeholder="Ex: 000000000"
                              name="whatsappNumber"
                              value={data.whatsappNumber}
                              onChange={onChangeHandler}
                            />
                          </div>
                        </div>
                      </li>
                      <li
                        className={`mb-10 ml-6 ${
                          register.password ? "h-full" : "h-8"
                        } overflow-hidden `}
                      >
                        <span
                          className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                            register.password ? "bg-green-200" : "bg-gray-100"
                          } `}
                          onClick={() =>
                            setRegister({
                              comapny: false,
                              profile: false,
                              password: true,
                            })
                          }
                        >
                          {register.password ? (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </span>
                        <div
                          className="pt-2 cursor-pointer"
                          onClick={() =>
                            setRegister({
                              comapny: false,
                              profile: false,
                              password: true,
                            })
                          }
                        >
                          <h2 className="text-[15px] uppercase font-semibold tracking-wide space-x-2 flex">
                            <span className="">
                              <FaLock />{" "}
                            </span>
                            <span className="">Password Settings</span>
                          </h2>
                        </div>
                        <div className=" space-y-5  pt-5">
                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              New Password
                            </span>
                            <p
                              className=" text-2xl absolute top-1/2 transform -translate-y-1/2 right-3"
                              onClick={() => {
                                setShowPasword(!showPassword);
                                console.log("hi");
                              }}
                            >
                              {showPassword ? <BiShow /> : <BiHide />}
                            </p>
                            <input
                              className="block no-spinner w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type={showPassword ? "text" : "password"}
                              placeholder="***********"
                              name="password"
                              value={data.password}
                              onChange={onChangeHandler}
                              required
                              autoComplete="new-password"
                            />
                          </div>

                          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                              Confirm Password
                            </span>
                            <p
                              className=" text-2xl absolute top-1/2 transform -translate-y-1/2 right-3"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? <BiShow /> : <BiHide />}
                            </p>
                            <input
                              className="block no-spinner w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="***********"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              required
                              autoComplete="new-password"
                            />
                          </div>
                        </div>
                        <div className="pt-3 flex justify-end">
                          <button className="block w-full py-4 mb-4 leading-6 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">
                            {isLoading ? <BtnLoader /> : "Signup"}
                          </button>
                        </div>
                      </li>
                    </ol>
                    <div
                      className={`${
                        register.password === true && "hidden"
                      } flex justify-end`}
                    >
                      <span
                        className="flex justify-center items-center text-sm font-medium text-light bg-lightblue w-[100px] py-2 rounded cursor-pointer"
                        onClick={() => {
                          if (register.comapny === true) {
                            setRegister({
                              comapny: false,
                              profile: true,
                              password: false,
                            });
                          }
                          if (register.profile === true) {
                            setRegister({
                              comapny: false,
                              profile: false,
                              password: true,
                            });
                          }
                        }}
                      >
                        Next
                      </span>
                    </div>
                    {error && (
                      <div className="flex justify-center">
                        <p className="text-main text-xs capitalize">{error} </p>
                      </div>
                    )}

                    <div className="">
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an account?
                        <Link
                          to="/b2b/login"
                          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="col-span-7 text-darktext space-y-2 text-sm">
                    <div className="flex justify-center mt-4">
                      <h3 className="text-xl font-[700] text-green-700 uppercase">
                        Thank You for registering our B2B Portal
                      </h3>
                    </div>
                    <div className=" mx-10 space-y-2">
                      <p className="">
                        You will be allowed to access the business portal only
                        after getting confirmation from the managemant side.
                      </p>
                      <p className="">
                        Please wait until you get confirmation email.Then
                        proceed to login our B2B portal.
                      </p>
                      <p className="">
                        {" "}
                        You will be only allowed to access this email for
                        another registraion either access confirmation from
                        management side nor rejection from the management side{" "}
                      </p>
                    </div>
                    <div className="text-center py-7">
                      <h4 className="uppercase text-text font-[700]">
                        Your Agent Code is
                      </h4>
                      <p className="text-green-700 font-[700]">
                        {result?.data?.agentCode}{" "}
                      </p>
                    </div>
                    <div className="mx-10 bg-gray-200 p-6 text-gray-500 space-y-1">
                      <p className="">
                        Please save this for further login purposes. You can
                        access other details from the corresponding email you
                        have provided
                      </p>
                      <p className="">
                        You can move to
                        <Link to="/b2b/login">
                          <span className="text-main font-[550] cursor-pointer">
                            Login
                          </span>
                        </Link>{" "}
                        from here.Click!!{" "}
                      </p>
                      <div className="flex justify-end">
                        <p
                          className="text-lightblue font-[550] cursor-pointer"
                          onClick={() => {
                            setInfo(false);
                          }}
                        >
                          Back
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="lg:hidden relative mt-16">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="trizzle-assets/images/background-blue-gradient.png"
            alt=""
          />
          <div className="container px-4 mx-auto">
            <div className="relative max-w-xs mx-auto py-12">
              <a className="inline-block mb-24" href="#">
                <img src="trizzle-assets/logos/trizzle-white-logo.svg" alt="" />
              </a>
              <div className="max-w-xl">
                <p className="text-xl font-semibold text-white leading-10 mb-8">
                  Trizzle is easy to use and has a lot of great features that
                  make it a valuable tool for any developer.
                </p>
                <div className="flex items-center mb-12">
                  <img
                    className="w-14 h-14 mr-4 rounded-full border border-blue-500"
                    src="trizzle-assets/images/avatar-men-2.png"
                    alt=""
                  />
                  <div>
                    <h4 className="text-lg leading-6 font-semibold text-white">
                      John Doe
                    </h4>
                    <span className="text-xs font-semibold text-gray-100">
                      Front-End Developer
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-50"
                    href="#"
                  ></a>
                  <a
                    className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-400"
                    href="#"
                  ></a>
                  <a
                    className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-400"
                    href="#"
                  ></a>
                  <a
                    className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-400"
                    href="#"
                  ></a>
                  <a
                    className="inline-block w-2 h-2 rounded-full bg-blue-400"
                    href="#"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default B2BRegisterPage;
