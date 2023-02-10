import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import ImageSection from "./ImageSection";
import SearchCards from "../../components/Cards/SearchCards";

function AttractionDetails() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Attraction</h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span className="text-textColor" onClick={() => navigate(-1)}>
            Attraction
          </span>
          <span>{">"} </span>
          <span>Details</span>
        </div>
      </div>
      <div className="p-2 lg:p-6">
        <SearchCards />
        <div className="bg-white rounded shadow-sm">
          <ImageSection />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default AttractionDetails;
