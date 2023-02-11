import React from "react";
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

const VisaOrderCard = ({ orderInfo }) => {
  const navigate = useNavigate();
  const [list, setList] = useState([
    {
      _id: "63e5bc32bab786a972d7522a",
      visaType: {
        ageFrom: 10,
        ageTo: 50,
        createdAt: "2023-02-02T06:00:54.777Z",
        entryType: "multiple",
        insurance: 10,
        isDeleted: false,
        falseprocessingTime: 10,
        processingTimeFormat: "hours",
        purchaseCost: 1000,
        stayPeriod: 12,
        stayPeriodFormat: "days",
        tax: 10,
        updatedAt: "2023-02-02T06:00:54.777Z",
        validity: 10,
        validityTimeFormat: "days",
        visa: {
          _id: "63d536189d2ea573ba3c842b",
          country: {
            countryName: "United Arab Emirates",
            createdAt: "2022-12-28T12:17:48.353Z",
            currencySymbol: "AED",
            flag: "https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/ae.svg",
            isDeleted: false,
            isocode: "AE",
            phonecode: "+971",
            updatedAt: "2023-01-04T11:00:32.648Z",
          },
          name: "UAE Visa",
          inclusions: Array(2),
          description: "asdfghsdfghjk",
        },
        visaName: "12 Days work Visa",
        visaPrice: 1200,
        __v: 0,
        _id: "63db51961f740ebd11222e81",
      },
      visaPrice: 1200,
      clientMarkup: 0,
      profit: 400,
      totalAmount: 2440,
      email: "shakyanikhil12345@gmail.com",
      contactNo: 8882398520,
      onwardDate: "2023-02-13T00:00:00.000Z",
      returnDate: "2023-02-28T00:00:00.000Z",
      noOfTravellers: 2,
      travellers: [
        {
          expiryDate: { day: 17, month: 9, year: 2030 },
          dateOfBirth: { day: 3, month: 7, year: 2000 },
          title: "mr",
          firstName: "Nikhil",
          lastName: "Shakya",
          country: "63db60f9f926b340dbb3f446",
          passportNo: "8888999966665555",
          contactNo: 8882398520,
          email: "shakyanikhil12345@gmail.com",
          isApproved: false,
          _id: "63e5bc32bab786a972d7522b",
          documents: "63e5bcc4bab786a972d7523f",
        },
        {
          expiryDate: { day: 7, month: 8, year: 2035 },
          dateOfBirth: { day: 4, month: 8, year: 2000 },
          title: "mrs",
          firstName: "Aditi",
          lastName: "Shakya",
          country: "63db60f9f926b340dbb3f446",
          passportNo: "6666555544442222",
          contactNo: 6386708773,
          email: "nikhilakhilrajat@gmail.com",
          isApproved: false,
          _id: "63e5bc32bab786a972d7522c",
          documents: "63e5bcc4bab786a972d75240",
        },
      ],
      user: "63e322a4f0c726ad4514145b",
      isPayed: true,
      isDocumentUplaoded: false,
      status: "initiated",
      referenceNumber: "B2CVSA_1676000306065797",
      createdAt: "2023-02-10T03:38:26.082Z",
      updatedAt: "2023-02-10T03:38:50.928Z",
      __v: 0,
    },
  ]);
  const { jwtToken } = useSelector((state) => state.users);

  console.log(jwtToken);

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
            // setList([...response.data]);
          }
        }

        console.log(response);
      } catch (error) {}
    };

    getVisaList();
  }, []);

  const hanldeApplyAgain = (orderIndex, userIndex) => {
    console.log(list);
    console.warn(orderIndex);
    console.warn(userIndex);
    navigate(`/visa/reapply`, {
      state: {
        orderId: list[orderIndex]?._id,
        userId: list[orderIndex]["travellers"][userIndex]._id,
      },
    });
  };
  return (
    <>
      {list?.map((ele, orderIndex) => {
        return ele?.travellers?.map((user, userIndex) => (
          <div
            key={ele?._id}
            className="  bg-[#f4f7ff] w-full rounded-lg shadow-md p-3 mt-3"
          >
            <div className="flex flex-wrap w-full px-[1em] text-sm text-darktext">
              <div className="flex flex-wrap items-start  w-[100%]">
                <div className="flex bg-gray-300 w-[100%] items-start justify-between py-1 px-2 text-black border-b border-spacing-1 border-dashed border-white ">
                  Referance No. : {ele?.referenceNumber}
                </div>
                <div className="flex bg-gray-300 w-[100%] items-start justify-between px-2 py-1">
                  <h2 className="text-base font-[600]">
                    {ele.visaType?.visaName}
                  </h2>
                  <span className="font-medium  mt-1 flex gap-1 items-center">
                    For :
                    <span>{ele?.visaType?.visa?.country?.countryName}</span>
                    <img
                      src={ele?.visaType?.visa?.country?.flag}
                      alt="flag"
                      className=" h-2"
                    />
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
                          (!user?.isStatus || !user?.isApproved) &&
                          " text-red-700"
                        } ${user?.isStatus === "initiated" && "text-blue"} ${
                          user?.isStatus === "approved" && "text-green-600"
                        }`}
                      >
                        {user?.isStatus ? user?.isStatus : "Pending"}
                      </span>
                    </div>
                    {/* {user?.isStatus === "rejected" && ( */}
                    <button
                      onClick={() => {
                        hanldeApplyAgain(orderIndex, userIndex);
                      }}
                      className="bg-red-300 text-red-700 px-4 py-1 rounded w-[50%] "
                    >
                      Apply Again
                    </button>
                    {/* // )} */}
                    {user?.visaUpload && (
                      <button className=" bg-green-300 text-green-600 px-4 py-1 rounded w-[50%] ">
                        Download Visa
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));
      })}
    </>
  );
};

export default VisaOrderCard;
