import React from "react";
import { monthNames } from "../../../data";
import formatDate from "../../../utils/formatDate";

const VisaOrderTemplate = ({ data }) => {
  const name = `${data?.travellers?.title} ${data?.travellers?.firstName} ${data?.travellers?.lastName}`;

  const dob = ` ${monthNames[data?.travellers?.dateOfBirth?.month - 1]?.name} ${
    data?.travellers?.dateOfBirth?.day
  }, ${data?.travellers?.dateOfBirth?.year}`;

  const passportExpiry = ` ${
    monthNames[data?.travellers?.expiryDate?.month - 1]?.name
  } ${data?.travellers?.expiryDate?.day}, ${
    data?.travellers?.expiryDate?.year
  }`;

  const baseUrl = "https://secure.mytravellerschoice.com";
  return (
    <div className="w-[21.6cm] h-[27.9cm]  p-[20px] ">
      <div className="text-[30px] font-bold bg-gray-500 text-white px-[30px] pt-4">
        {data?.visa}
      </div>
      <section className=" grid grid-cols-4 p-[30px]">
        <div className="col-span-3 text-[16px] flex flex-col gap-y-2">
          <div className="capitalize grid grid-cols-3">
            Name : <span className="col-span-2">{name}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Date of Birth : <span className="col-span-2">{dob}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Email :{" "}
            <span className="col-span-2">{data?.travellers?.email}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Phone No :{" "}
            <span className="col-span-2">{data?.travellers?.contactNo}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Passport No :{" "}
            <span className="col-span-2">{data?.travellers?.passportNo}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Passport Expiry Date :{" "}
            <span className="col-span-2">{passportExpiry}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Onward Date :{" "}
            <span className="col-span-2">{formatDate(data?.onwardDate)}</span>
          </div>
          <div className="capitalize grid grid-cols-3">
            Return Date :{" "}
            <span className="col-span-2">{formatDate(data?.returnDate)}</span>
          </div>
        </div>
        <div className="flex  justify-end">
          <img
            src="https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg"
            alt="profile pic"
            className="h-[4.5cm] w-[3.5cm]"
          />
        </div>
      </section>
      <section>
        <div className="text-[20px]  bg-gray-500 text-white px-[30px] ">
          Application Ref No : {data?.referenceNumber}
        </div>

        {data?.travellers?.visaUpload && (
          <img src={`${baseUrl}${data?.travellers?.visaUpload}`} alt="" />
        )}
      </section>
    </div>
  );
};

export default VisaOrderTemplate;
