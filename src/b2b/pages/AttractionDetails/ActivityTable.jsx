import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivities,
  setSelectionArray,
} from "../../../redux/slices/agentExcursionSlice";
import priceConversion from "../../../utils/PriceConversion";

function ActivityTable({ item, bookingType, index }) {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  console.log(item);

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
    ? String(date.getDate() + Number(agentExcursion?.bookingPriorDays)).padStart(
        2,
        "0"
      )
    : String(date.getDate() + 1).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  const res = yyyy + "-" + mm + "-" + dd;

  return (
    <tr className="text-darktext border-b" key={index}>
      <td className="py-3 px-1 max-w-[13em] w-[13em] space-x-2 ">
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
        <span className="">{item?.name}</span>
<<<<<<< HEAD
        {bookingType === "ticket" && (
=======

        {item?.bookingType === "ticket" && (
>>>>>>> 4eeee4a997d883f961278bfdd5e7c56648d2d3bb
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
<<<<<<< HEAD
            length: bookingType === "ticket" ? item?.commonTicketCount + item?.adultTicketCount : 50,
=======
            length:
              item?.bookingType === "ticket"
                ? item?.commonTicketCount + item?.adultTicketCount
                : 50,
>>>>>>> 4eeee4a997d883f961278bfdd5e7c56648d2d3bb
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
<<<<<<< HEAD
            length: bookingType === "ticket" ? item?.commonTicketCount + item?.childTicketCount || 1 : 50,
=======
            length:
              item?.bookingType === "ticket"
                ? item?.commonTicketCount + item?.childTicketCount || 1
                : 50,
>>>>>>> 4eeee4a997d883f961278bfdd5e7c56648d2d3bb
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
          {Array.from({ length: bookingType === "ticket" ?  item?.infantTicketCount || 6 : 9}).map(
            (_, index) => (
              <option value={index} key={index}>
                {index}
              </option>
            )
          )}
        </select>
      </td>
      <td className="py-3 px-1 min-w-[4em] pl-5">
        <h2 className="font-medium">
          {priceConversion(price, selectedCurrency, true)}
        </h2>
      </td>
    </tr>
  );
}

export default ActivityTable;
