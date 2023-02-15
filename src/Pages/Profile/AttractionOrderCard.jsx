import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";

const AttractionOrderCard = ({ orderInfo }) => {
  const [list, setList] = useState([]);
  const { jwtToken } = useSelector((state) => state.users);

  useEffect(() => {
    const getAttractionList = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };

        const response = await axios.get("/attractions/orders/all", config);
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

        console.log(response);
      } catch (error) {}
    };

    getAttractionList();
  }, []);

  return (
    <div className="grid grid-cols-12 bg-[#f4f7ff] w-full rounded-lg shadow-md p-3 mt-3">
      <div className="col-span-2 w-full h-[7em] overflow-hidden rounded-md">
        <img
          src="https://i.pinimg.com/originals/83/ca/ac/83caac905835b9fc27f926615a224fb8.jpg"
          alt="attraction_img"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="col-span-10 w-full px-[1em] text-sm text-darktext"
        // key={''}
      >
        <div className="flex flex-wrap items-start gap-[1em]">
          <div className="flex items-start gap-[1em]">
            <div>
              <h2 className="text-base font-[600]">Title of Attraction</h2>
              <span className="font-medium block mt-1">Name of activity</span>
              <span className=" flex items-center gap-[7px] text-grayColor mt-1">
                <BsFillBagCheckFill /> 2023/04/20
              </span>
              <span className=" flex items-center gap-[7px] text-grayColor mt-1">
                <FaMoneyBillAlt /> 2023/04/20
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-grayColor">Details</h2>
            <span className="flex items-center gap-[7px] mt-1 capitalize">
              <BiUser /> moon
            </span>
            <span className="flex items-center gap-[7px] mt-1">
              <MdOutlineEmail /> test@email.com
            </span>
            <span className="flex items-center gap-[7px] mt-1">
              <FiMapPin /> United Arab Emirtaes
            </span>
            <span className="flex items-center gap-[7px] mt-1">
              <BiPhone /> 9885562332
            </span>
          </div>
          <div>
            <span className="flex items-center gap-[7px] mt-1 capitalize">
              Without Transfer
            </span>
            <span className="block mt-2">
              Adults Count: <span className="text-sm font-medium">1</span>
            </span>
            <span className="block mt-2">
              Children Count: <span className="text-sm font-medium">0</span>
            </span>
            <span className="block mt-2">
              Infants Count: <span className="text-sm font-medium">0</span>
            </span>
          </div>
          <div>
            <span className="block mt-1">
              <span className="bg-green-100 text-xs text-green-500 px-4 rounded capitalize">
                Booked
              </span>
            </span>
            <span className="flex items-center gap-[7px] mt-1 text-base font-[600] capitalize">
              <FaMoneyBillAlt /> 1200 INR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionOrderCard;
