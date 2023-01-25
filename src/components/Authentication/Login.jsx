import React, { useEffect, useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../axios";
import { setUser } from "../../redux/slices/usersSlice";

function Login({ setViewAuth, viewAuth }) {
    const [resetPassword, setResetPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const { home } = useSelector(state => state.general)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError("");
            setIsLoading(true);
            const response = await axios.post("/users/login", data);

            dispatch(setUser(response.data));
            setIsLoading(false);
            setViewAuth(!viewAuth)
        } catch (err) {

            if (err?.response?.data?.error === "Invalid credentials") {
                setError("You have given incorrect email or password")
            } else {
                setError(err?.response?.data?.error)
            }
            setIsLoading(false);
        }
    };

    if (!viewAuth) return null
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 modal_overlay" onClick={() => setViewAuth(!viewAuth)}>
            <div className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                onClick={() => setViewAuth(!viewAuth)}
            >
                <AiOutlineClose />
            </div>
            <div className="flex justify-center items-center w-full h-[100vh] z-50">
                <div className="h-[80vh] w-8/12 bg-[#fcfeff] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <div className="m-4 h-[96%] relative">
                        <div className="bglogindubai h-[100%]  bg-right rounded-2xl flex justify-start items-center pl-6 ">
                            <div className="w-[24em] loginCard h-[95%] shadow-md  rounded-2xl">
                                <div className="p-5 space-y-3"
                                >
                                    {/* <div className="text-4xl text-main font-semibold">
                                        Welcome Back...
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

                                    <div className="space-y-5 py-4" >
                                    <button className="flex items-center shadow-md space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200">
                                        <span className="text-3xl">
                                            <FcGoogle />
                                        </span>
                                        <span className="">
                                            Continue with google
                                        </span>
                                    </button>
                                    <button className="flex items-center shadow-md space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200">
                                        <span className=" text-3xl text-blue">
                                            <BsFacebook />{" "}
                                        </span>
                                        <span className="">
                                            Continue with facebook
                                        </span>
                                    </button>
                                </div>

                                    {resetPassword ? (
                                        <>
                                            <div className="space-y-2  py-4">
                                                <label className="text-text "> Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                    className="w-full placeholder:text-maintrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans "
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                            <div className="flex justify-between pt-2">
                                                <button
                                                    type="submit"
                                                    className="py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2"
                                                >
                                                    <span className="">Send</span>
                                                    <span className="">
                                                        <AiOutlineRight />{" "}
                                                    </span>
                                                </button>
                                                <span className="text-sm flex space-x-1 items-center hover:text-main cursor-pointer px-5 text-maintrans"
                                                    onClick={() => setResetPassword(!resetPassword)}
                                                >
                                                    <span className="">
                                                        <AiOutlineLeft />{" "}
                                                    </span>
                                                    <span className="">
                                                        Back to sign-in
                                                    </span>
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <form onSubmit={handleSubmit} >
                                                <div className="space-y-2  py-4">
                                                    <label className="text-text "> Email</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Your Email"
                                                        className="w-full placeholder:text-maintrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans "
                                                        name="email"
                                                        value={data.email || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-text ">
                                                        Password
                                                    </label>
                                                    <input
                                                        required
                                                        type="password"
                                                        placeholder="Give a password"
                                                        className="w-full placeholder:text-maintrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans"
                                                        name="password"
                                                        value={data.password || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {error && (
                                                    <p className="text-main text-sm">{error}</p>
                                                )}
                                                <div className="flex justify-between pt-2">
                                                    <button
                                                        type="submit"
                                                        className="py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2"
                                                    >
                                                        <span className="">Sign In</span>
                                                        <span className="">
                                                            <AiOutlineRight />{" "}
                                                        </span>
                                                    </button>
                                                    <span className="text-sm flex space-x-1 items-center hover:text-main cursor-pointer px-5 text-maintrans"
                                                        onClick={() => setResetPassword(!resetPassword)}
                                                    >
                                                        <span className="">
                                                            <RiLockPasswordLine />{" "}
                                                        </span>
                                                        <span className="">
                                                            Reset password
                                                        </span>
                                                    </span>
                                                </div>
                                            </form>
                                        </>
                                    )}
                                    <div className="text-sm pt-1">
                                        <span className="text-maintrans">
                                            Dont have an account yet?{" "}
                                        </span>
                                        <span
                                            className="text-main underline cursor-pointer"
                                            onClick={() => {
                                                setViewAuth((prev) => {
                                                    return { ...prev, viewRegister: true, viewLogin: false }
                                                })
                                            }}
                                        >
                                            Register
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
