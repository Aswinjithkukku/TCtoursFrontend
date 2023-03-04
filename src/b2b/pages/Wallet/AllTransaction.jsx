import React, { useEffect } from "react";
import { MdBlockFlipped, MdOutlineArrowUpward } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";
import { getTransaction } from "../../../redux/slices/walletSlice";

function AllTransaction() {
   const dispatch = useDispatch()
   const { transaction } = useSelector((state) => state.wallet);
   const { selectedCurrency } = useSelector((state) => state.home);


   return (
      <table className="w-full text-textColor">
         <thead className="bg-gray-100 text-textColor text-[14px] text-left">
            <tr>
               <th className="font-[500] p-3">Transaction No.</th>
               <th className="font-[500] p-3">Gateway</th>
               <th className="font-[500] p-3">Date</th>
               <th className="font-[500] p-3">Time</th>
               <th className="font-[500] p-3">Status</th>
               <th className="font-[500] p-3">Price</th>
            </tr>
         </thead>
         <tbody className="text-sm text-textColor">
            {transaction?.result?.data?.map((item, index) => (
               <tr className="border-b border-tableBorderColor" key={index}>
                  <td className="p-3"># {item?.b2bTransactionNo}</td>
                  <td className="p-3 capitalize">{item?.paymentProcessor}</td>
                  <td className="p-3 whitespace-nowrap">
                     {item?.createdAt?.slice(0, 10)}{" "}
                  </td>
                  <td className="p-3 ">
                     {new Date(item?.createdAt)?.toLocaleTimeString()}
                  </td>
                  <td className="p-3 flex space-x-1 items-center ">
                     {item?.status === "success" ? (
                        <>
                           <span className="text-green-600">
                              <MdOutlineArrowUpward />
                           </span>
                           <span className="text-green-600 capitalize">
                              Success
                           </span>
                        </>
                     ) : item?.status === "pending" ? (
                        <>
                           <span className="text-orange-400">
                              <BsExclamationLg />
                           </span>
                           <span className="text-orange-400 capitalize">
                              Pending
                           </span>
                        </>
                     ) : (
                        <>
                           <span className="text-red-600">
                              <MdBlockFlipped />
                           </span>
                           <span className="text-red-600 capitalize">
                              Cancel
                           </span>
                        </>
                     )}
                  </td>
                  <td className="p-3">
                     {priceConversion(item?.amount, selectedCurrency, true)}
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default AllTransaction;
