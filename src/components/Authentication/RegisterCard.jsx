import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiFillMail, AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../axios";
import { setUser } from "../../redux/slices/usersSlice";
import { IoCall } from "react-icons/io5";
import { RiCustomerService2Fill } from 'react-icons/ri'

function RegisterCard({ setViewAuth, viewAuth }) {
    const [data, setData] = useState({
        name: "",
        email: "",
        country: "",
        phoneNumber: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const { countries } = useSelector((state) => state.home);
    const { home } = useSelector((state) => state.general);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);

            const response = await axios.post("/users/signup", data);
            dispatch(setUser(response.data));
            setIsLoading(false);
            setViewAuth(!viewAuth)
        } catch (err) {
            setError(
                err?.response?.data?.error || "Something went wrong, Try again"
            );
            setIsLoading(false);
        }
    };
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 modal_overlay" onClick={() => setViewAuth(!viewAuth)}>
            <div className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                onClick={() => setViewAuth(!viewAuth)}
            >
                <AiOutlineClose />
            </div>

            <div className="flex justify-center items-center w-full h-[100vh] z-50">
                <div className="h-[80vh] w-8/12 bg-[#fcfeff]  rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <div className="m-4 h-[96%] relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className="absolute -bottom-14"
                        >
                            <path
                                fill="#ffffff"
                                fill-opacity="1"
                                d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                            ></path>
                        </svg>
                        <div className=" bgdubai h-[100%]  bg-right rounded-2xl flex justify-between items-center pr-6">
                            <div className="h-full flex items-end z-20">
                                <div className="mb-7">
                                    <div className="text-2xl text-darktext font-bold flex items-center gap-2">
                                        <RiCustomerService2Fill />
                                        Helpline
                                    </div>
                                    <div className=" flex items-end space-x-2 ">
                                        <div className="text-sm text-text">
                                            <div className="flex space-x-2 text-lightblue">
                                                <span className=""> <IoCall /> </span>
                                                <span className="">{home?.phoneNumber1}</span>
                                            </div>
                                            <div className="flex space-x-2 text-lightblue">
                                                <span className=""><IoCall /></span>
                                                <span className="">{home?.phoneNumber2}</span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 text-lightblue">
                                            <span className=""><AiFillMail /> </span>
                                            <span className="text-sm">{home?.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[24em] h-[97%] loginCard shadow-md  rounded-2xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-5 space-y-3"
                                >
                                    {/* <div className="text-4xl text-blueColor  font-semibold">
                                        Greetings...
                                    </div> */}
                                    <div className="flex justify-center items-center pb-1 border-text border-b-2 space-x-5">
                                        <div className="">
                                            <img
                                                src={process.env.REACT_APP_SERVER_URL + home?.logo}
                                                alt="tc"
                                                className="h-10 md:h-14"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        {/* <label className="text-text ">Name</label> */}
                                        <input
                                            type="text"
                                            placeholder="Tell us Your Name"
                                            className="w-full placeholder:text-bluetrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                                            name="name"
                                            value={data.name || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        {/* <label className="text-text ">Email</label> */}
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="w-full placeholder:text-bluetrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans "
                                            name="email"
                                            value={data.email || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex  ">
                                        <div className="space-y-1">
                                            {/* <label className="text-text ">
                                                code
                                            </label> */}
                                            <select
                                                name="country"
                                                id=""
                                                className="text-darktext placeholder:text-bluetrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                                                onChange={handleChange}
                                                value={data.country || ""}
                                            >
                                                <option value="" hidden>
                                                    code
                                                </option>
                                                {countries?.map((country, index) => {
                                                    return (
                                                        <option
                                                            className="text-darktext capitalize"
                                                            value={country?._id}
                                                            key={index}
                                                        >
                                                            {country?.phonecode}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="space-y-1 w-full">
                                            {/* <label className="text-text ">
                                                PhoneNumber
                                            </label> */}
                                            <input
                                                type="number"
                                                placeholder="Enter Your Phone Number"
                                                className="w-full placeholder:text-bluetrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                                                name="phoneNumber"
                                                value={data.phoneNumber || ""}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        {/* <label className="text-text ">
                                            Password
                                        </label> */}
                                        <input
                                            type="password"
                                            placeholder="Give a password"
                                            className="w-full placeholder:text-bluetrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                                            name="password"
                                            value={data.password || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-main text-sm">{error}</p>
                                    )}
                                    {/* <div className="text-text">
                                        <span className="text-xs">
                                            By register you agree to our
                                        </span>
                                        <span className="text-xs text-blueColor  hover:text-sky-500 cursor-pointer underline">
                                            Terms and Conditions
                                        </span>
                                    </div> */}
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="submit"
                                            className="py-2 rounded-xl px-10 bg-blueColor hover:bg-light hover:text-blueColor  text-light duration-300 flex items-center space-x-2 cursor-pointer"
                                        >
                                            <span className="">Register</span>
                                            <span className="">
                                                <AiOutlineRight />{" "}
                                            </span>
                                        </button>
                                    </div>
                                     <div className="flex items-center justify-between pt-2">
                                        <button className="flex items-center space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blueColor  text-bluetrans duration-200">
                                            <span className="">
                                                <FcGoogle />
                                            </span>
                                            <span className="">Google</span>
                                        </button>
                                        <button className="flex items-center space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blueColor  text-bluetrans duration-200">
                                            <span className="text-blue">
                                                <BsFacebook />{" "}
                                            </span>
                                            <span className="">Facebook</span>
                                        </button>
                                    </div> 
                                    <div className="text-sm pt-1">
                                        <span className="text-bluetrans">
                                            Already have an account?{" "}
                                        </span>
                                        <span
                                            className="text-blueColor  underline cursor-pointer"
                                            onClick={() => {
                                                setViewAuth((prev) => {
                                                    return { ...prev, viewRegister: false, viewLogin: true }
                                                })
                                            }}
                                        >
                                            Login
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default RegisterCard;
