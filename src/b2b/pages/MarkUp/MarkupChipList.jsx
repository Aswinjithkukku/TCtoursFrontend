import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   setAgentMarkup,
   setClientMarkup,
} from "../../../redux/slices/markupSlice";
import priceConversion from "../../../utils/PriceConversion";
import AgentMarkupModal from "./AgentMarkupModal";
import ClientMarkupModal from "./ClientMarkupModal";

function MarkupChipList({ item }) {
   const [markup, setMarkup] = useState({
      client: false,
      agent: false,
   });
   const dispatch = useDispatch();

   const [markupData, setMarkupData] = useState({
      agent: item?.markupSubagent,
      client: item?.markupClient,
   });
   const { selectedCurrency } = useSelector((state) => state.home);
   return (
      <>
         <div className="mb-2.5 bg-neutral-50 border border-neutral-100 rounded-xl m-4 shadow-sm ">
            <div className="p-4">
               <div className="w-full">
                  <table className="w-full ">
                     <tbody>
                        <tr>
                           <td className="pr-4 pb-3">
                              <div className="flex flex-wrap items-center  w-full">
                                 <div className="w-auto p-2 space-y-2 ">
                                    <span className="flex text-sm font-semibold break-words ">
                                       {item?.title}
                                    </span>
                                    <span className="text-xs flex gap-4 capitalize text-slate-800">
                                       <span className="bg-gray-200 py-[4px] px-2 rounded-full">
                                          {item?.bookingType}
                                       </span>

                                       <span className="bg-gray-200 py-[4px] px-2 rounded-full">
                                          {item?.destination?.name}
                                       </span>
                                    </span>
                                    <div className="sm:flex flex-wrap gap-2">
                                       <span className="block text-xs text-neutral-500">
                                          Default Price -{" "}
                                          {priceConversion(
                                             item?.activities?.lowPrice,
                                             selectedCurrency,
                                             true
                                          ) || "N/A"}
                                       </span>
                                       <span className="block text-xs text-neutral-500">
                                          Agent Markup -
                                          {markupData?.agent &&
                                          markupData?.agent !== {}
                                             ? (markupData?.agent
                                                  ?.markupType === "flat" &&
                                                  priceConversion(
                                                     markupData?.agent?.markup,
                                                     selectedCurrency,
                                                     true
                                                  )) ||
                                               (markupData?.agent
                                                  ?.markupType ===
                                                  "percentage" &&
                                                  `${markupData?.agent?.markup} %`)
                                             : "N/A"}
                                       </span>
                                       <span className="block text-xs text-neutral-500">
                                          Client Markup -
                                          {markupData?.client &&
                                          markupData?.client !== {}
                                             ? (markupData?.client
                                                  ?.markupType === "flat" &&
                                                  priceConversion(
                                                     markupData?.client?.markup,
                                                     selectedCurrency,
                                                     true
                                                  )) ||
                                               (markupData?.client
                                                  ?.markupType ===
                                                  "percentage" &&
                                                  `${markupData?.client?.markup} %`)
                                             : "N/A"}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className="pr-4">
                              <div className="flex  gap-2 sm:justify-start justify-between items-center">
                                 <button
                                    className="px-4 py-3 font-medium text-xs border hover:border-neutral-200 rounded-lg"
                                    onClick={() => {
                                       setMarkup({
                                          client: false,
                                          agent: true,
                                       });
                                       dispatch(
                                          setAgentMarkup({
                                             _id: item?._id,
                                             name: item?.title,
                                             agentMarkup: markupData?.agent,
                                          })
                                       );
                                    }}
                                 >
                                    Add Agent Markup
                                 </button>
                                 <button
                                    className="px-4 py-3 font-medium text-xs border hover:border-neutral-200 rounded-lg"
                                    onClick={() => {
                                       setMarkup({
                                          client: true,
                                          agent: false,
                                       });
                                       dispatch(
                                          setClientMarkup({
                                             _id: item?._id,
                                             name: item?.title,
                                             clientMarkup: markupData?.client,
                                          })
                                       );
                                    }}
                                 >
                                    Add Client Markup
                                 </button>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         {markup.client && (
            <ClientMarkupModal
               setMarkup={setMarkup}
               setMarkupData={setMarkupData}
            />
         )}
         {markup.agent && (
            <AgentMarkupModal
               setMarkup={setMarkup}
               setMarkupData={setMarkupData}
               markupData={markupData}
            />
         )}
      </>
   );
}

export default MarkupChipList;
