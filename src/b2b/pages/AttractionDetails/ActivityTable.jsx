import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivities,
  setSelectionArray,
} from "../../../redux/slices/agentExcursionSlice";
import priceConversion from "../../../utils/PriceConversion";
import Modal from "../../components/modal/Modal";
import formatDate from "../../../utils/formatDate";
import { ImTicket } from "react-icons/im";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";

const data = [
  { time: "8:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "8:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "9:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "9:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "10:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "10:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "11:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "11:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "12:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "12:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "01:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "01:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "02:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "02:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "03:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "03:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "04:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "04:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "05:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "05:30", adultPrice: "1200", childPrice: "800", tickets: 31 },
  { time: "06:00", adultPrice: "1200", childPrice: "800", tickets: 31 },
];

function ActivityTable({ item, bookingType, index }) {
  const [price, setPrice] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const dispatch = useDispatch();

  const { agentRecievedActivities, agentExcursion } = useSelector(
    (state) => state.agentExcursions
  );
  const { selectedCurrency } = useSelector((state) => state.home);

  const handleChange = ({ value, name, index }) => {
    dispatch(
      setActivities({
        value,
        name,
        index,
      })
    );
  };
  useEffect(() => {
    let sum =
      item?.adultPrice * Number(item?.adult) +
      item?.childPrice * Number(item?.child) +
      item?.infantPrice * Number(item?.infant);

    let totalTravellers = Number(item?.adult) + Number(item?.child);
    if (item?.transfer === "private") {
      if (item?.privateTransfers?.length !== 0) {
        let priceList = [...item?.privateTransfers];
        priceList = priceList?.sort((a, b) => {
          return a.maxCapacity - b.maxCapacity;
        });
        let totalPrice = 0;
        while (totalTravellers > 0) {
          for (let x = 0; x < priceList.length; x++) {
            if (x === 0) {
              if (
                totalTravellers > 0 &&
                totalTravellers <= priceList[x].maxCapacity
              ) {
                totalPrice = totalPrice + priceList[x].price;
                totalTravellers = totalTravellers - priceList[x].maxCapacity;
                break;
              }
            } else {
              if (
                totalTravellers <= priceList[x].maxCapacity &&
                totalTravellers > priceList[x - 1].maxCapacity
              ) {
                totalPrice = totalPrice + priceList[x].price;
                totalTravellers = totalTravellers - priceList[x].maxCapacity;
                break;
              }
            }
            if (x === priceList.length - 1) {
              totalPrice = totalPrice + priceList[x].price;
              totalTravellers = totalTravellers - priceList[x].maxCapacity;
            }
          }
        }
        sum = sum + totalPrice;
      }
    } else if (item?.transfer === "shared") {
      sum = sum + Number(totalTravellers) * item?.sharedTransferPrice;
    }
    setPrice(sum);

    dispatch(
      setActivities({
        value: sum,
        name: "price",
        index,
      })
    );
  }, [item.adult, item.child, item.infant, agentRecievedActivities, dispatch]);

  useEffect(() => {
    const result = agentRecievedActivities?.filter(
      (item) => item?.isChecked === true
    );
    localStorage.setItem("tour_order", JSON.stringify(result));
    dispatch(setSelectionArray(result));
  }, [agentRecievedActivities, dispatch]);

  useEffect(() => {
    if (item.activityType === "transfer") {
      dispatch(
        setActivities({
          value: "private",
          name: "transfer",
          index,
        })
      );
    }
  }, []);

  let date = new Date();
  let dd = agentExcursion?.bookingPriorDays
    ? String(
        date.getDate() + Number(agentExcursion?.bookingPriorDays)
      ).padStart(2, "0")
    : String(date.getDate() + 1).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  const res = yyyy + "-" + mm + "-" + dd;

  const toggletimeSlotDrawer = () => {
    setShowTimeSlot(!showTimeSlot);
  };

  const handleDateChange = (x) => {
    console.log(item.date);
    const currentDate = new Date(item.date);
    currentDate.setDate(currentDate.getDate() + x);
    const newDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() < 9 && "0"
    }${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    console.log(newDate);
    dispatch(
      setActivities({
        value: newDate,
        name: "date",
        index,
      })
    );
  };

  console.log(selectedTimeSlot);

  const handleTimeSlotChange = (slot) => {
    setSelectedTimeSlot(slot);
    dispatch(
      setActivities({
        value: slot.time,
        name: "timeSlot",
        index,
      })
    );
  };

  return (
    <tr className="text-darktext border-b" key={index}>
      <td className="py-3 px-1 max-w-[13em] w-[13em] space-x-2 ">
        <div className="">
          <span className="cursor-pointer">
            <input
              disabled={
                item?.adultTicketCount === 0 &&
                item?.childTicketCount === 0 &&
                item?.commonTicketCount === 0 &&
                item?.bookingType === "ticket"
              }
              type="checkbox"
              className=""
              name="isChecked"
              checked={item?.isChecked}
              onChange={(e) =>
                handleChange({
                  value: e.target.checked,
                  name: e.target.name,
                  index,
                })
              }
            />
          </span>
          <span className="ml-2">{item?.name}</span>
        </div>
        <button
          onClick={toggletimeSlotDrawer}
          className="text-[12px] text-red-600"
          disabled={!item?.date}
        >
          {selectedTimeSlot
            ? `Selected Slot : ${selectedTimeSlot?.time}`
            : "Select Time Slot"}
        </button>
        {bookingType === "ticket" && (
          <>
            <p className="text-main text-xs mr-5 font-[500]">
              Adult Tickets left : {item?.adultTicketCount}
            </p>
            <p className="text-main text-xs mr-5 font-[500]">
              Child Tickets left : {item?.childTicketCount}
            </p>
          </>
        )}
      </td>
      <td className="py-3 px-1 text-sm">
        <input
          type="date"
          className=""
          name="date"
          min={res}
          value={item.date}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        />
      </td>
      <td className="py-3 px-1 ">
        <select
          className="border py-1 px-1"
          name="transfer"
          value={item.transfer}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {item.activityType !== "transfer" && (
            <option value="without">without</option>
          )}
          {item?.isPrivateTransferAvailable && item.privateTransfers && (
            <option value="private">private</option>
          )}
          {item?.isSharedTransferAvailable && item.sharedTransferPrice && (
            <option value="shared">shared</option>
          )}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1 min-w-[55px]"
          name="adult"
          value={item.adult}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {Array.from({
            length:
              bookingType === "ticket"
                ? item?.commonTicketCount + item?.adultTicketCount
                : 50,
          }).map((_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1 min-w-[55px]"
          name="child"
          value={item.child}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {Array.from({
            length:
              bookingType === "ticket"
                ? item?.commonTicketCount + item?.childTicketCount || 1
                : 50,
          }).map((_, index) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1 min-w-[55px]"
          name="infant"
          value={item.infant}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {Array.from({
            length: bookingType === "ticket" ? item?.infantTicketCount || 6 : 9,
          }).map((_, index) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 px-1 min-w-[4em] pl-5">
        <h2 className="font-medium">
          {priceConversion(price, selectedCurrency, true)}
        </h2>
      </td>
      {showTimeSlot && (
        <Modal hideDrawer={toggletimeSlotDrawer} title={item?.name}>
          <div className="text-blue-700 border-b-[1px] p-2 pl-4 flex gap-2 items-center font-medium py-3">
            <span className="text-[25px]">
              <ImTicket />
            </span>
            <span>124th Floor Ticket + The Cafe (Non-Prime hours)</span>
            <button className="text-red-600 text-[12px] font-semibold ">
              Change
            </button>
          </div>
          <div className="text-blue-700 flex flex-col gap-2  font-medium py-3 ">
            <div className="border-b-[2px] border-blue-600 pl-4 flex justify-between items-center">
              <h2 className="text-[20px]   capitalize">Select Time options</h2>
              <div className="text-blue-700  p-2 font-medium py-3 flex items-center gap-x-2">
                <button
                  className="text-red-600 text-[20px] font-semibold ml-2"
                  onClick={() => {
                    handleDateChange(-1);
                  }}
                >
                  <MdArrowBackIos />
                </button>
                {formatDate(item?.date)}
                <button
                  className="text-red-600 text-[20px] font-semibold ml-2"
                  onClick={() => {
                    handleDateChange(1);
                  }}
                >
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>

            <div className=" pl-4 p-2">
              <div className="flex ">
                <ul className="flex  gap-x-4 text-[12px]">
                  <li className="flex items-center gap-x-2">
                    <div className="h-2 w-2 rounded-md bg-green-500" />{" "}
                    Available
                  </li>
                  <li className="flex items-center gap-x-2">
                    <div className="h-2 w-2 rounded-md bg-cardyellow" /> Minimum
                    Left
                  </li>
                  <li className="flex items-center gap-x-2">
                    <div className="h-2 w-2 rounded-md bg-red-600" /> Booked
                  </li>
                </ul>
              </div>
              <div className="mt-2">
                <ul className="flex flex-wrap justify-between gap-y-3">
                  {data?.map((ele) => (
                    <>
                      <li
                        className={`${
                          selectedTimeSlot?.time === ele?.time &&
                          "border-blue-500 border-2"
                        } w-[150px] h-[100px] text-[14px] border-2  rounded-sm overflow-hidden cursor-pointer`}
                      >
                        <button
                          className="w-[150px] h-[100px] text-[14px]  rounded-sm overflow-hidden cursor-pointer outline-none"
                          onClick={() => {
                            handleTimeSlotChange(ele);
                          }}
                        >
                          <h2 className="h-[30px] bg-green-400 flex justify-center items-center text-white">
                            {ele.time} ({ele?.tickets})
                          </h2>
                          <div className=" text-[12px] flex flex-col justify-center items-center gap-y-2 h-[70px] bg-green-200">
                            <p>Adult : AED {ele?.adultPrice}</p>
                            <p>Child : AED {ele?.childPrice}</p>
                          </div>
                        </button>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 p-2 bg-gray-100 w-[100%] flex justify-between h-[60px]">
                <div className="flex h-[100%] items-center ">
                  <h2 className="">
                    Selected Time Slot : {selectedTimeSlot?.time || "N/A"}
                  </h2>
                </div>
                <button
                  className="h-[40x] py-2 px-4 bg-blue-600 text-white rounded-md flex items-center gap-1"
                  onClick={toggletimeSlotDrawer}
                >
                  Continue{" "}
                  <span className="text-[20px]">
                    <FaAngleDoubleRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </tr>
  );
}

export default ActivityTable;
