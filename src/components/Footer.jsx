import React from "react";
import { useSelector } from "react-redux";
import FooterList from "./Footer/FooterList";

function Footer() {
    const { home } = useSelector((state) => state.general);


    return (
        <div className="bg-dark text-text">
            <div className="mx-5 lg:max-w-screen-xl lg:mx-auto">
                <div className="md:grid md:grid-cols-5 md:gap-5">

                    {home?.footer?.map((item,index) => (
                            <FooterList item={item} key={index} />
                    ))}
                </div>

                <div className="flex justify-center items-center py-7 border-text border-b-2 space-x-5">
                    <div className="">
                        <img
                            src={process.env.REACT_APP_SERVER_URL + home?.logo}
                            alt="tc"
                            className="h-10 md:h-auto"
                        />
                    </div>
                </div>

                <div className="text-text text-xs py-5 text-center leading-relaxed space-y-2">
                    <div className="">
                        {home?.footerDescription}
                    </div>
                    <div className="">
                        Copyright © 1996–{new Date().getFullYear()}{" "}
                        TravellersChoice.com™. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
