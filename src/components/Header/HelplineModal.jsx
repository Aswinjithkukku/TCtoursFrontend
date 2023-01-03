import React from "react";
import { useSelector } from "react-redux";

function HelplineModal({ setView, view }) {
    const { home } = useSelector(state => state.general)
    if (!view.helpline) return null
    return (
        <>
            {(home?.phoneNumber1 || home?.phoneNumber2) && (
                <div className="absolute top-7 md:top-8 left-14 md:left-24 z-20 bg-[#002366]">
                    <div className="mx-7 space-y-3 py-2">
                        <div className="text-soft ">
                            <a href={`tel:+91${home?.phoneNumber1}`}>+91{home?.phoneNumber1}</a>
                        </div>
                        <div className="text-soft ">
                            <a href={`tel:+91${home?.phoneNumber2}`}>+91{home?.phoneNumber2}</a>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default HelplineModal
