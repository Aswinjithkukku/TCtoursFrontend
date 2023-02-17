import React, { useRef } from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import VisaOrderTemplate from "../VisaApplyPage/visaTemplate/VisaOrderTemplate";
import ReactToPrint from "react-to-print";

const VisaOrderCard = ({ orderInfo }) => {
  const templateRef = useRef();
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { jwtToken } = useSelector((state) => state.users);

  useEffect(() => {
    const getVisaList = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await axios.get("/visa/application/list", config);
        if (response.status === 200) {
          if (response.data.length === 0) {
            Swal.fire({
              icon: "error",
              title: "No Visa Application",
              text: "Given user do not have any application",
            });
          } else {
            setList([...response.data]);
          }
        }
      } catch (error) {}
    };

    getVisaList();
  }, []);

  const handleDocumentUpload = (user) => {
    navigate(`/visa/reapply`, {
      state: user,
    });
  };

  const handleVisaDownload = async (url) => {
    try {
      const data = await axios.get(url);
      console.log(data);
    } catch (error) {}
  };

  const baseUrl = process.env.REACT_APP_SERVER_URL;

  return (
    <>
      {list?.map((ele, orderIndex) => {
        const user = ele?.travellers;
        return (
          <div
            key={ele?._id}
            className="  bg-[#f4f7ff] w-full rounded-lg shadow-md p-3 mt-3"
          >
            <div className="absolute left-[20000px]">
              {user?.isStatus === "approved" && (
                <div ref={templateRef}>
                  <VisaOrderTemplate data={ele} />
                </div>
              )}
            </div>
            <div className="flex flex-wrap w-full px-[1em] text-sm text-darktext">
              <div className="flex flex-wrap items-start  w-[100%]">
                <div className="flex bg-gray-300 w-[100%] items-start justify-between py-1 px-2 text-black border-b border-spacing-1 border-dashed border-white rounded">
                  Referance No. : {ele?.referenceNumber}
                </div>
                <div className="flex bg-gray-300 w-[100%] items-start justify-between px-2 py-1 rounded">
                  {/* <h2 className="text-base font-[600]">
                    {ele.visaType?.visaName}
                  </h2> */}
                  <span className="font-medium  mt-1 text-left  flex gap-1 ">
                    Visa :<span>{ele?.visa}</span>
                  </span>
                  <span className=" flex items-center gap-[7px]  mt-1">
                    Onward Date :{" "}
                    <span className="">{ele?.onwardDate.split("T")[0]}</span>
                  </span>
                  <span className=" flex items-center gap-[7px] mt-1">
                    Return Date :{" "}
                    <span className="">{ele?.returnDate.split("T")[0]}</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 w-[100%] justify-between mt-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="">Name</h2>
                    <h2>DOB</h2>
                    <h2>Passport NO.</h2>
                    <h2>Passport Expiry</h2>
                    {/* <h2>Status</h2> */}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="capitalize ">{`${user?.title}. ${user?.firstName} ${user?.lastName}`}</span>
                    <span className="capitalize">{`${user?.dateOfBirth?.day}/${user?.dateOfBirth?.month}/${user?.dateOfBirth?.year}`}</span>
                    <span className="capitalize">{user?.passportNo}</span>
                    <span className="capitalize">{`${user?.expiryDate?.day}/${user?.expiryDate?.month}/${user?.expiryDate?.year}`}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 ">
                    <div className="text-xl ">
                      Status :
                      <span
                        className={`px-2 py-[2px] rounded-sm capitalize ${
                          user?.isStatus === "rejected" && " text-red-700"
                        } 
                          ${
                            (user?.isStatus === "initiated" ||
                              user?.isStatus === "submitted") &&
                            "text-blue"
                          } 
                          ${user?.isStatus === "approved" && "text-green-600"}`}
                      >
                        {user?.isStatus}
                      </span>
                    </div>
                    {ele?.status === "payed" &&
                      user?.isStatus === "initiated" && (
                        <button
                          onClick={() => {
                            handleDocumentUpload(ele);
                          }}
                          className="bg-teal-200 text-teal-700 px-4 py-1 rounded w-[50%] "
                        >
                          Upload Docs
                        </button>
                      )}
                    {user?.isStatus === "approved" && (
                      <a
                        href={`${baseUrl}${user?.visaUpload}`}
                        download="nikhil.pdf"
                        className="text-[13px] font-[500] uppercase text-white bg-green-500 px-3 py-1 rounded flex justify-center items-center gap-4"
                      >
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VisaOrderCard;
