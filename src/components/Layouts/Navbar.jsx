import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import Login from "../Authentication/Login";
import { getHome } from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "../Navbar/ProfileModal";
import CurrencyModal from "../Header/CurrencyModal";
import LanguageModal from "../Header/LanguageModal";
import RegisterCard from "../Authentication/RegisterCard";

function Navbar() {

    const [currency, setCurrency] = useState(false)
    const [language, setLanguage] = useState(false)
    const [viewAuth, setViewAuth] = useState({
        viewRegister: false,
        viewLogin: false,
    })

    const [profileView, setProfileView] = useState(false)

    const dispatch = useDispatch();
    const { home } = useSelector((state) => state.general);
    const { selectedCurrency } = useSelector((state) => state.home);
    const { isLoggedIn, user } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    return (
        <>
            <div className="bg-soft sticky top-0 z-20 shadow">
                <div className=" py-[10px] px-3 lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <div className="">
                                <img
                                    className="h-8 md:h-[42px]"
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
                                        className="flex space-x-2 items-center cursor-pointer"
                                        onClick={() =>
                                            setLanguage(true)
                                        }
                                    >
                                        <span className="text-base font-medium cursor-pointer">
                                            English
                                        </span>
                                        <span className="text-base">
                                            {language ? (
                                                <AiOutlineUp />
                                            ) : (
                                                <AiOutlineDown />
                                            )}
                                        </span>
                                        {/* absolute modal */}
                                        <LanguageModal setLanguage={setLanguage} language={language} />
                                        {/* absolute modal */}
                                    </div>
                                    <div
                                        className="flex space-x-1 items-center cursor-pointer relative"
                                        onClick={() => setCurrency(true)}
                                    >
                                        <span className="text-base font-medium">
                                            <img src={selectedCurrency ? selectedCurrency?.flag : ''} className="w-[32px]" />
                                        </span>
                                        <span className="text-base">
                                        </span>
                                        {/* absolute modal */}
                                        {currency && (
                                            <CurrencyModal setCurrency={setCurrency} currency={currency} />
                                        )}
                                        {/* absolute modal */}
                                    </div>
                                    <div className="cursor-pointer whitespace-nowrap font-medium text-sm lg:text-base">
                                        <Link className="flex space-x-1 items-center w-[80px] rounded justify-center py-1 bg-[#E6e6e6]" to="#">
                                            <span className=''><IoMdCart /> </span>
                                            <span className=''>Cart</span>
                                        </Link>
                                    </div>

                                </div>
                            </span>
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3 py-2 lg:my-2 rounded-lg  cursor-pointer"
                                        onClick={() => setViewAuth((prev) => {
                                            return { ...prev, viewRegister: true }
                                        })
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3 py-2 lg:my-2 rounded-lg  cursor-pointer"
                                        onClick={() => setViewAuth((prev) => {
                                            return { ...prev, viewLogin: true }
                                        })
                                        }
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div className="relative"  >
                                    <div className='flex items-center'>
                                        <img src={`https://avatars.dicebear.com/api/identicon/${user?.email}.svg`} alt='avatar' className="h-8 w-8 md:h-[34px] md:w-[34px] rounded-full object-cover cursor-pointer "
                                            onClick={() => {
                                                setProfileView(true)
                                            }}
                                        />
                                    </div>
                                    {profileView && (
                                        <div className="hidden md:block"  >
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
