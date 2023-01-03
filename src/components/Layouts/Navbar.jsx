import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import RegisterMobileCard from "../Authentication/RegisterMobileCard";
import LoginMobileCard from "../Authentication/LoginMobileCard";
import { getHome } from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../static/images/avatar.png'
import ProfileModal from "../Navbar/ProfileModal";

function Navbar() {

    const [view, setView] = useState({
        viewRegister: false,
        viewLogin: false,
        viewRegisterMobile: false,
        viewloginMobile: false

    })
    const [profileView, setProfileView] = useState(false)

    const dispatch = useDispatch();
    const { home } = useSelector((state) => state.general);
    const { isLoggedIn } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    return (
        <>
            <div className="bg-soft">
                <div className=" py-1 px-3 lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between">
                        <Link to="/">
                            <div className="">
                                <img
                                    className="h-8 md:h-14"
                                    src={process.env.REACT_APP_SERVER_URL + home?.logo}
                                    alt={"img"}
                                />
                            </div>
                        </Link>
                        <div className="flex space-x-5">
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setView((prev) => {
                                            return { ...prev, viewRegister: true }
                                        })
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setView((prev) => {
                                            return { ...prev, viewLogin: true }
                                        })
                                        }
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div className="relative">
                                <div className='hidden lg:flex items-center '>
                                    <img src={avatar} alt='avatar' className="h-10 w-10 rounded-full object-cover cursor-pointer"
                                    onClick={() => {
                                        setProfileView(!profileView)
                                    }}
                                    />
                                </div>
                            </div>
                            )}
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setView((prev) => {
                                            return { ...prev, viewRegisterMobile: true }
                                        })
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setView((prev) => {
                                            return { ...prev, viewloginMobile: true }
                                        })
                                        }
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div className="relative">
                                    <div className='lg:hidden flex items-center '>
                                        <img src={avatar} alt='avatar' className="h-8 w-8 rounded-full object-cover cursor-pointer"
                                        onClick={() => {
                                            setProfileView(!profileView)
                                        }}
                                        />
                                    </div>
                                    {profileView && (
                                        <ProfileModal profileView={profileView} setProfileView={setProfileView} />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>



            {/* modals */}
            <>
                <div>
                    <RegisterMobileCard
                        setView={setView}
                        view={view}
                    />
                    {view.viewRegisterMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() =>
                                setView(!view)
                            }
                        ></div>
                    )}
                </div>

                <div>
                    <LoginMobileCard
                        setView={setView}
                        view={view}
                    />
                    {view.viewloginMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() => setView(!view)}
                        ></div>
                    )}
                </div>

                {view.viewRegister && (

                    <Register
                        setView={setView}
                        view={view}
                    />
                )}
                {view.viewLogin && (
                    <Login
                        setView={setView}
                        view={view}
                    />
                )}
            </>
        </>
    );
}

export default Navbar;
