import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../axios";

const ReApplyVisaApplication = ({ data }) => {
  const navigate = useNavigate();
  const { jwtToken } = useSelector((state) => state.users);
  const [docs, setDocs] = useState({});

  const handleDocChange = (e) => {
    const {
      target: { files, name },
    } = e;
    setDocs({ ...docs, [name]: files[0] });
  };

  const handleUploadDocs = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("passportFistPagePhoto", docs.passportFistPagePhoto);
      formData.append("passportLastPagePhoto", docs.passportLastPagePhoto);
      formData.append("passportSizePhoto", docs.passportSizePhoto);
      formData.append("supportiveDoc1", docs.supportiveDoc1);
      formData.append("supportiveDoc2", docs.supportiveDoc2);

      const config = {
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await axios.post(
        `/visa/application//${data?._id}/reapply/${data?.travellers?._id}`,
        formData,
        config
      );

      console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully submitted.",
          text: "Documents successfully uploaded.",
        });
        navigate("/order");
      }
    } catch (error) {}
  };

  return (
    <div className="bg-[whitesmoke] flex justify-center min-h-[62vh]">
      <div className="  w-[100%]   p-4 grid place-items-center px-[10%]">
        <div className="bg-white">
          <div
            className={`my-2 border px-3 py-4  rounded-lg ${
              true ? "bg-primaryColor " : "bg-slate-400"
            } rounded-[.25rem]`}
          >
            <p className="font-[600] text-[20px] text-soft">Upload Documents</p>
          </div>
          <div className="flex w-[45%] flex-wrap gap-2 mt-2 px-2">
            <div className="text-xs">
              Gender :
              <span className="text-[#00ffff] capitalize">
                {data?.travellers?.gender}
              </span>
            </div>
            <div className="text-xs">
              First Name :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.travellers?.firstName}
              </span>
            </div>
            <div className="text-xs">
              Last Name :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.travellers?.lastName}
              </span>
            </div>
            <div className="text-xs">
              Dob :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.travellers?.dateOfBirth.day +
                  "/" +
                  data?.travellers?.dateOfBirth.month +
                  "/" +
                  data?.travellers?.dateOfBirth.year}
              </span>
            </div>
            <div className="text-xs">
              Visit Date :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.onwardDate.split("T")[0]}
              </span>
            </div>
            <div className="text-xs">
              Passport Number :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.travellers?.passportNo}
              </span>
            </div>
            <div className="text-xs">
              Passport Expiry :
              <span className="text-[#00ffff] capitalize ml-1">
                {data?.travellers?.expiryDate.day +
                  "/" +
                  data?.travellers?.expiryDate.month +
                  "/" +
                  data?.travellers?.expiryDate.year}
              </span>
            </div>
          </div>
          <div className="p-2 ">
            <form action="" onSubmit={handleUploadDocs}>
              <div className="grid grid-cols-5 gap-3 mt-4">
                <div className=" flex flex-col">
                  <label htmlFor="" className="label">
                    Passport First Page
                  </label>
                  <input
                    className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                    name="passportFistPagePhoto"
                    type={"file"}
                    required
                    onChange={handleDocChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="label">
                    Passport Second Page
                  </label>
                  <input
                    className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none "
                    name="passportLastPagePhoto"
                    type={"file"}
                    required
                    onChange={handleDocChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="label">
                    Passport Size Photo
                  </label>
                  <input
                    className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none "
                    name="passportSizePhoto"
                    type={"file"}
                    required
                    onChange={handleDocChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="label">
                    Supportive Document 1
                  </label>
                  <input
                    className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none "
                    name="supportiveDoc1"
                    type={"file"}
                    required
                    onChange={handleDocChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="label">
                    Supportive Document 2
                  </label>
                  <input
                    className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none "
                    name="supportiveDoc2"
                    type={"file"}
                    onChange={handleDocChange}
                  />
                </div>
              </div>
              <div className="h-[40px] flex justify-end py-2">
                <button
                  className="bg-lightblue rounded-[.25rem] text-white px-5 h-9"
                  type="submit"
                >
                  Upload Docs
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReApplyVisaApplication;
