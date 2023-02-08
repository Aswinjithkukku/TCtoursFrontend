import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivities,
  setSelectionArray,
} from "../../redux/slices/excursionSlice";
import priceConversion from "../../utils/PriceConversion";

function ActivityTable({ item, index }) {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const { recievedActivities } = useSelector((state) => state.excursion);
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
    if (item?.isTransferAvailable === true) {
      if (item?.privateTransferPrice !== null && item?.transfer === "private") {
        sum = sum + item?.privateTransferPrice;
      } else if (
        item?.sharedTransferPrice !== null &&
        item?.transfer === "shared"
      ) {
        sum = sum + item?.sharedTransferPrice;
      } else {
        sum = sum;
      }
    }
    setPrice(sum);
    dispatch(
      setActivities({
        value: sum,
        name: "price",
        index,
      })
    );
  }, [item.adult, item.child, item.infant, recievedActivities, dispatch]);

  useEffect(() => {
    const result = recievedActivities?.filter(
      (item) => item?.isChecked === true
    );
    localStorage.setItem("tour_order", JSON.stringify(result));
    dispatch(setSelectionArray(result));
  }, [recievedActivities, dispatch]);

  
    let date = new Date()
    let dd = String(date.getDate() + 2).padStart(2, '0')
    let mm = String(date.getMonth() + 1).padStart(2, '0')
    let yyyy = date.getFullYear()
    const res = yyyy+"-"+mm+"-"+dd
    console.log(res)
  
  return (
    <tr className="text-darktext border-b" key={index}>
      <td className="py-3 px-1 max-w-[13em] w-[13em] space-x-2 ">
        <span className="">
          <input
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
          <option value="without">without</option>
          {item?.isTransferAvailable && item.privateTransferPrice && (
            <option value="private">private</option>
          )}
          {item?.isTransferAvailable && item.privateTransferPrice && (
            <option value="shared">shared</option>
          )}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1"
          name="adult"
          value={item.adult}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1"
          name="child"
          value={item.child}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 px-1">
        <select
          className="border py-1 px-1"
          name="infant"
          value={item.infant}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, index })
          }
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
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
