import React, { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineMail, AiOutlineUp } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import CurrencyModal from "./CurrencyModal";
import HelplineModal from "./HelplineModal";
import LanguageModal from "./LanguageModal";
import { useHandleClickOutside } from "../../hooks";

export default function TopHeader() {
    const [view, setView] = useState({
        helpline: false,
        currency: false,
        language: false
    })

    const helplineRef = useRef()
    const currencyRef = useRef()
    const languageRef = useRef()
    useHandleClickOutside(helplineRef, () => setView(!view))
    useHandleClickOutside(currencyRef, () => setView(!view))
    useHandleClickOutside(languageRef, () => setView(!view))

    const { home } = useSelector(state => state.general)

    return (
        <div className=" hidden bg-[#002366]">
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div className="flex justify-between py-2">
                    <span className="flex text-sm relative">
                        <div className="flex items-center text-soft space-x-2 md:space-x-5 border-r  px-3 md:px-5">
                            <span className="text-sm">
                                <a href={`${home?.facebookUrl}`} target="_blank" rel="noopener noreferrer" >
                                    <FaFacebookF />
                                </a>
                            </span>
                            <span className=" lg:text-lg">
                                <a href={`${home?.instagramUrl}`} target="_blank" rel="noopener noreferrer" >
                                    <FaInstagram />
                                </a>
                            </span>
                            <span className=" lg:text-lg">
                                <a href={`mailto:${home?.email}`}>
                                    <AiOutlineMail />
                                </a>
                            </span>
                        </div>
                        <div
                            ref={helplineRef}
                            className="text-soft flex space-x-1 items-center px-3 text-xs lg:text-sm whitespace-nowrap cursor-pointer"
                            onClick={() => {
                                setView((prev) => {
                                    return { ...prev, helpline: !view.helpline }
                                })
                            }}
                        >
                            <span className="text-xs">Helpline</span>
                            <span className="text-sm">
                                {view.helpline ? (
                                    <AiOutlineUp />
                                ) : (
                                    <AiOutlineDown />
                                )}
                            </span>
                            {/* absolute div */}
                            <HelplineModal setView={setView} view={view} />
                            {/* absolute div */}
                        </div>
                    </span>
                    <span className="flex text-sm">
                        <div className="flex px-5 space-x-2 md:space-x-5 text-soft items-center font-light">
                            <div className="cursor-pointer whitespace-nowrap text-xs lg:text-sm">
                                <a href="https://app.mytcb2b.com/#/login">
                                    B2B Login
                                </a>
                            </div>
                            <div
                                ref={currencyRef}
                                className="flex space-x-1 items-center cursor-pointer relative"
                                onClick={() => setView((prev) => {
                                    return { ...prev, currency: !view.currency }
                                })}
                            >
                                <span className="text-xs">AED</span>
                                <span className="text-sm">
                                    {view.currency ? (
                                        <AiOutlineUp />
                                    ) : (
                                        <AiOutlineDown />
                                    )}
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
                                <span className="text-xs cursor-pointer">
                                    English
                                </span>
                                <span className="text-sm">
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
                    
                </div>
            </div>
        </div>

    )
}
