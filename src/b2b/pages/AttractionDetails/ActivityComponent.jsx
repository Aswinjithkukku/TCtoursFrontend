import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   setActivities,
   setSelectionArray,
} from "../../../redux/slices/agentExcursionSlice";
import priceConversion from "../../../utils/PriceConversion";

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
      <div className="text-textColor shadow-md bg-gray-100/30 rounded-lg p-4 mb-4">
         <div className="w-full flex justify-between items-center ">
            <span className="flex w-full gap-2">
               <span className="">
                  <input
                     className="w-5 h-5 accent-blue-500"
                     disabled={
                        item?.adultTicketCount === 0 &&
                        item?.childTicketCount === 0 &&
                        item?.commonTicketCount === 0 &&
                        item?.bookingType === "ticket"
                     }
                     type="checkbox"
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
               <span className="w-full">
                  <p className="font-[550] text-[12px] sm:text-[16px]">
                     {item?.name}
                  </p>
               </span>
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
            </span>
            <span className="md:flex items-center">
               <p className="text-[9px] whitespace-nowrap font-[400] text-text  h-full">
                  per {item?.base} *
               </p>
               <p className="font-[600] whitespace-nowrap text-[12px] sm:text-[17px] flex items-end">
                  {priceConversion(item?.adultPrice, selectedCurrency, true)}
               </p>
            </span>
         </div>
         {item?.isChecked && (
            <div className="space-y-3">
               <div className="flex gap-2 mt-2">
                  <input
                     className="border border-blue-500 px-2 rounded outline-1 outline-green-500 py-2"
                     type="date"
                     name="date"
                     min={res}
                     value={item.date}
                     onChange={(e) => {
                        handleChange({
                           value: e.target.value,
                           name: e.target.name,
                           index,
                        });
                     }}
                  />
                  <select
                     className="border border-blue-500 px-4 rounded outline-1 outline-green-500 py-2"
                     name="transfer"
                     value={item.transfer}
                     onChange={(e) =>
                        handleChange({
                           value: e.target.value,
                           name: e.target.name,
                           index,
                        })
                     }
                  >
                     {item.activityType !== "transfer" && (
                        <option value="without">Without Transfer</option>
                     )}
                     {item?.isPrivateTransferAvailable &&
                        item.privateTransfers && (
                           <option value="private">Private Transfer</option>
                        )}
                     {item?.isSharedTransferAvailable &&
                        item.sharedTransferPrice && (
                           <option value="shared">Shared Transfer</option>
                        )}
                  </select>
               </div>
               <div className="sm:flex justify-between">
                  <div className="flex gap-5 ml-2 mt-2">
                     <span className="">
                        <div className=" flex items-center">
                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={
                                 item.adult > 1 &&
                                 (() =>
                                    dispatch(
                                       setActivities({
                                          value: Number(item.adult) - 1,
                                          name: "adult",
                                          index,
                                       })
                                    ))
                              }
                           >
                              -
                           </div>
                           <input
                              className="w-10 text-center border-none outline-none ring-transparent no-spinner"
                              name="adult"
                              value={item.adult}
                              type="number"
                              min={1}
                              onChange={(e) => {
                                 e.target.value < 0
                                    ? handleChange({
                                         value: 1,
                                         name: e.target.name,
                                         index,
                                      })
                                    : handleChange({
                                         value: e.target.value,
                                         name: e.target.name,
                                         index,
                                      });
                              }}
                           />

                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={() =>
                                 dispatch(
                                    setActivities({
                                       value: Number(item.adult) + 1,
                                       name: "adult",
                                       index,
                                    })
                                 )
                              }
                           >
                              +
                           </div>
                        </div>
                        <p className="text-[14px] text-center mt-1 font-[400] text-gray-400">
                           Adult{" "}
                        </p>
                     </span>
                     <span className="">

                        <div className=" flex items-center">
                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={
                                 item?.child > 0 &&
                                 (() =>
                                    dispatch(
                                       setActivities({
                                          value: Number(item.child) - 1,
                                          name: "child",
                                          index,
                                       })
                                    ))
                              }
                           >
                              -
                           </div>
                           <input
                              className="w-10 text-center border-none outline-none ring-transparent no-spinner"
                              name="child"
                              value={item.child}
                              type="number"
                              min={0}
                              onChange={(e) => {
                                 e.target.value < 0
                                    ? handleChange({
                                         value: 0,
                                         name: e.target.name,
                                         index,
                                      })
                                    : handleChange({
                                         value: e.target.value,
                                         name: e.target.name,
                                         index,
                                      });
                              }}
                           />

                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={() =>
                                 dispatch(
                                    setActivities({
                                       value: Number(item.child) + 1,
                                       name: "child",
                                       index,
                                    })
                                 )
                              }
                           >
                              +
                           </div>
                        </div>
                        <p className="text-[14px] font-[400] text-center mt-1 text-gray-400 ">
                           Children
                        </p>
                     </span>
                     <span className="">
                        <div className="flex items-center">
                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={
                                 item?.infant > 1 &&
                                 (() =>
                                    dispatch(
                                       setActivities({
                                          value: Number(item.infant) - 1,
                                          name: "infant",
                                          index,
                                       })
                                    ))
                              }
                           >
                              -
                           </div>
                           <input
                              className="w-10 text-center border-none outline-none ring-transparent no-spinner"
                              name="infant"
                              value={item.infant}
                              type="number"
                              min={0}
                              onChange={(e) => {
                                 e.target.value < 0
                                    ? handleChange({
                                         value: 0,
                                         name: e.target.name,
                                         index,
                                      })
                                    : handleChange({
                                         value: e.target.value,
                                         name: e.target.name,
                                         index,
                                      });
                              }}
                           />
                           <div
                              className=" text-lg flex justify-center items-center text-white font-[550] rounded-full bg-blue-600 w-5 h-5 cursor-pointer"
                              onClick={() =>
                                 dispatch(
                                    setActivities({
                                       value: Number(item.infant) + 1,
                                       name: "infant",
                                       index,
                                    })
                                 )
                              }
                           >
                              +
                           </div>
                        </div>
                        <p className="text-[14px] font-[400] text-center mt-1 text-gray-400">
                           Infant
                        </p>
                     </span>
                  </div>
                  <div className="mt-2 sm:mt-0">
                     <p className="font-[600] text-left sm:text-right  text-text text-[12px] sm:text-[14px]">
                        Grand Total
                     </p>
                     <p className="sm:text-right font-[600] sm:text-lg">
                        {priceConversion(price, selectedCurrency, true)}{" "}
                     </p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default ActivityComponent;
