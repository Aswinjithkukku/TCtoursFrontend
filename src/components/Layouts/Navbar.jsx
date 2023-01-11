import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Login from "../Authentication/Login";
import { getHome } from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "../Navbar/ProfileModal";
import { useHandleClickOutside } from "../../hooks";
import CurrencyModal from "../Header/CurrencyModal";
import LanguageModal from "../Header/LanguageModal";
import RegisterCard from "../Authentication/RegisterCard";

function Navbar() {

    const [view, setView] = useState({
        currency: false,
        language: false
    })
    const [viewAuth, setViewAuth] = useState({
        viewRegister: false,
        viewLogin: false,
    })
    const currencyRef = useRef()
    const languageRef = useRef()
    useHandleClickOutside(currencyRef, () => setView({
        currency: false,
        language: false
    }))
    useHandleClickOutside(languageRef, () => setView({
        currency: false,
        language: false
    }))

    const [profileView, setProfileView] = useState(false)

    const dispatch = useDispatch();
    const { home } = useSelector((state) => state.general);
    const { initialData } = useSelector((state) => state.home);
    const { isLoggedIn, user } = useSelector((state) => state.users);

    const dropdownWrapperRef = useRef()
    useHandleClickOutside(dropdownWrapperRef, () => setProfileView(false))

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    return (
        <>
            <div className="bg-soft sticky top-0 z-20 shadow">
                <div className=" py-4 px-3 lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between items-center">
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
                        <span className="md:flex text-lg hidden items-center ">
                        <div className="flex px-5 space-x-2 md:space-x-5 text-dark items-center">
                            <div className="cursor-pointer whitespace-nowrap font-medium text-sm lg:text-base">
                                <Link to="/b2b">
                                    B2B Login
                                </Link>
                            </div>
                            <div
                                ref={currencyRef}
                                className="flex space-x-1 items-center cursor-pointer relative"
                                onClick={() => setView((prev) => {
                                    return { ...prev, currency: !view.currency }
                                })}
                            >
                                <span className="text-base font-medium">
                                    <img src={initialData?.countries ? initialData?.countries[1]?.flag : ''} className="w-[28px]" />
                                </span>
                                <span className="text-base">
                                </span>
                                {/* absolute modal */}
                                <CurrencyModal setView={setView} view={view} />
                                {/* absolute modal */}
                            </div>
                            <div
                                ref={languageRef}
                                className="flex space-x-2 items-center cursor-pointer"
                                onClick={() =>
                                    setView((prev) => {
                                        return { ...prev, language: !view.language }
                                    })
                                }
                            >
                                <span className="text-base font-medium cursor-pointer">
                                    English
                                </span>
                                <span className="text-base">
                                    {view.language ? (
                                        <AiOutlineUp />
                                    ) : (
                                        <AiOutlineDown />
                                    )}
                                </span>
                                {/* absolute modal */}
                                <LanguageModal setView={setView} view={view} />
                                {/* absolute modal */}
                            </div>
                        </div>
                    </span>
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3 py-2 lg:my-3 rounded-lg  cursor-pointer"
                                        onClick={() => setViewAuth((prev) => {
                                            return { ...prev, viewRegister: true }
                                        })
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3 py-2 lg:my-3 rounded-lg  cursor-pointer"
                                        onClick={() => setViewAuth((prev) => {
                                            return { ...prev, viewLogin: true }
                                        })
                                        }
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div className="relative"  ref={dropdownWrapperRef}>
                                    <div className='flex items-center'>
                                        <img src={`https://avatars.dicebear.com/api/identicon/${user?.email}.svg`} alt='avatar' className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover cursor-pointer "
                                            onClick={() => {
                                                setProfileView(!profileView)
                                            }}
                                        />
                                    </div>
                                    {profileView && (
                                        <div className="hidden md:block" >
                                            <ProfileModal profileView={profileView} setProfileView={setProfileView} />
                                        </div>
                                    )}
                                </div>
                            )}
 
                        </div>
                    </div>
                </div>
            </div>



             {/* modals */}
            <>


                {viewAuth.viewRegister && (

                    <RegisterCard
                    setViewAuth={setViewAuth}
                        viewAuth={viewAuth}
                    />
                )}
                {viewAuth.viewLogin && (
                    <Login
                    setViewAuth={setViewAuth}
                        viewAuth={viewAuth}
                    />
                )}
            </>
        </>
    );
}

export default Navbar;
