import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   setActivities,
   setSelectionArray,
} from "../../../redux/slices/agentExcursionSlice";

function ActivityComponent({ item, bookingType, index }) {
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
                        totalTravellers =
                           totalTravellers - priceList[x].maxCapacity;
                        break;
                     }
                  } else {
                     if (
                        totalTravellers <= priceList[x].maxCapacity &&
                        totalTravellers > priceList[x - 1].maxCapacity
                     ) {
                        totalPrice = totalPrice + priceList[x].price;
                        totalTravellers =
                           totalTravellers - priceList[x].maxCapacity;
                        break;
                     }
                  }
                  if (x === priceList.length - 1) {
                     totalPrice = totalPrice + priceList[x].price;
                     totalTravellers =
                        totalTravellers - priceList[x].maxCapacity;
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
   return (
      <div className="">
         <div className=" flex gap-2">
            <span className="">
               <input type="checkbox" className="text-xl"></input>
            </span>
            <span className="">
               <p className="">Title of the Attraction</p>
            </span>
         </div>
      </div>
   );
}

export default ActivityComponent;
