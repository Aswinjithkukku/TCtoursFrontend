import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalRevenuePng } from "../../../static/imagesB2B";
import AllTransaction from "./AllTransaction";
import priceConversion from "../../../utils/PriceConversion";
import { setTransaction } from "../../../redux/slices/walletSlice";
import BtnLoader from "../../components/BtnLoader";
import WithdrawModal from "./WithdrawModal";
import { Pagination } from "../../components";
import axios from "../../../axios";

function Wallet() {
   const dispatch = useDispatch();
   const [component, setComponent] = useState({
      all: true,
      completed: false,
      failed: false,
   });
   const [filters, setFilters] = useState({
      limit: 10,
      skip: 0,
      totalTransactions: 0,
      status: "",
   });
   const [isLoading, setIsLoading] = useState(false);
   const [viewWithdrawModal, setViewWithdrawModal] = useState(false);

   const { balance, pendingBalance, loading } = useSelector(
      (state) => state.wallet
   );
   const { selectedCurrency } = useSelector((state) => state.home);
   const { token } = useSelector((state) => state.agents);

   // fetching transaction
   const fetchTransactions = async ({ ...filters }) => {
      try {
         console.log("transaction fetching...");
         setIsLoading(true);

         const searchQuery = `skip=${filters?.skip}&limit=${filters.limit}&status=${filters.status}`;
         let response;
         response = await axios.get(`/b2b/transactions/all?${searchQuery}`, {
            headers: { authorization: `Bearer ${token}` },
         });
         dispatch(setTransaction(response?.data || []));

         setFilters((prev) => {
            return {
               ...prev,
               totalTransactions:
                  response?.data?.result?.totalTransactions || 0,
            };
         });
         setIsLoading(false);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchTransactions({ ...filters });
      console.log("working");
   }, [filters.skip, filters.status]);

   return (
      <>
         <div className=" ">
            <div className="p-2 ">
               <div className=" ">
                  <div className="sm:grid sm:grid-cols-2 space-y-2 sm:space-y-0 sm:p-2 md:py-6 lg:p-12 gap-5 lg:gap-12">
                     <div className="">
                        <div className="bg-[#003580]  rounded-lg py-3 shadow-sm px-3 h-full lg:px-7">
                           <div className="h-full">
                              <div className="h-full">
                                 <h2 className="lg:text-3xl text-2xl text-center lg:text-start font-black text-gray-200 tracking-wider mb-3">
                                    Wallet Balance
                                 </h2>
                                 <h5 className="text-xs lg:text-sm text-text mb-3">
                                    My balance*
                                 </h5>
                                 <div className="flex space-x-2 text-2xl tracking-wider font-bold  ">
                                    {loading ? (
                                       <BtnLoader />
                                    ) : (
                                       <p className="text-gray-200">
                                          {priceConversion(
                                             balance,
                                             selectedCurrency,
                                             true
                                          )}
                                       </p>
                                    )}
                                 </div>
                                 <div className="mb-5">
                                    <h5 className="text-xs lg:text-sm text-text mb-3">
                                       is left on your wallet!
                                    </h5>
                                    <div className="flex  h-full w-full gap-3">
                                       <div className="w-full">
                                          <Link to="/b2b/payment/approval">
                                             <button className="w-full bg-primaryColor text-gray-100 py-3 rounded-[0.25rem] text-xs lg:text-sm">
                                                ADD MONEY
                                             </button>
                                          </Link>
                                       </div>
                                       <div className="w-full">
                                          <button
                                             className="w-full bg-primaryColor text-gray-100 py-3 rounded-[0.25rem] text-xs lg:text-sm"
                                             onClick={() =>
                                                setViewWithdrawModal(true)
                                             }
                                          >
                                             WITHDRAW
                                          </button>
                                          {/* asbolutemodal */}
                                          {viewWithdrawModal && (
                                             <WithdrawModal
                                                setViewWithdrawModal={
                                                   setViewWithdrawModal
                                                }
                                             />
                                          )}
                                          {/* asbolutemodal */}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="h-full ">
                        <div className="bg-[#003580] h-full rounded-xl py-3 shadow-sm px-3 lg:px-7">
                           <div className="flex justify-between">
                              <div className="">
                                 <h2 className="lg:text-3xl text-2xl text-center lg:text-start font-black text-gray-200 tracking-wider mb-3">
                                    Pending Balance
                                 </h2>
                                 <h5 className="text-xs lg:text-sm text-text mb-3">
                                    Pending balance*
                                 </h5>
                                 <div className="flex space-x-2 text-2xl tracking-wider font-bold  ">
                                    {loading ? (
                                       <BtnLoader />
                                    ) : (
                                       <p className="text-gray-200">
                                          {priceConversion(
                                             pendingBalance,
                                             selectedCurrency,
                                             true
                                          )}
                                       </p>
                                    )}
                                 </div>
                                 <div className="mb-5">
                                    <h5 className="text-xs lg:text-sm text-text mb-3">
                                       amount is pending!
                                    </h5>
                                    <h5 className="text-xs text-text mb-3">
                                       add money to your wallet and expolre
                                       destinations
                                    </h5>
                                    <h5 className="text-xs text-text mb-3">
                                       withdraw the money in to your account.
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* tables */}
                  <div className="lg:px-6 px-1 ">
                     <div className="w-full mt-3">
                        <ul className="flex -mb-4">
                           <li className="mb-4 mr-8">
                              <span
                                 className={`inline-block pb-4 ${
                                    component.all
                                       ? " text-blue-500 border-blue-500  "
                                       : " text-gray-400 border-transparent "
                                 } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                                 onClick={() => {
                                    setComponent((prev) => {
                                       return {
                                          ...prev,
                                          all: true,
                                          completed: false,
                                          failed: false,
                                       };
                                    });
                                    setFilters((prev) => {
                                       return { ...prev, status: "" };
                                    });
                                 }}
                              >
                                 All Transaction
                              </span>
                           </li>
                           <li className="mb-4 mr-8">
                              <span
                                 className={`inline-block pb-4 ${
                                    component.completed
                                       ? " text-blue-500 border-blue-500  "
                                       : " text-gray-400 border-transparent "
                                 } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                                 onClick={() => {
                                    setComponent((prev) => {
                                       return {
                                          ...prev,
                                          all: false,
                                          completed: true,
                                          failed: false,
                                       };
                                    });
                                    setFilters((prev) => {
                                       return { ...prev, status: "success" };
                                    });
                                 }}
                              >
                                 completed Transaction
                              </span>
                           </li>
                           <li className="mb-4 mr-8">
                              <span
                                 className={`inline-block pb-4 ${
                                    component.failed
                                       ? " text-blue-500 border-blue-500  "
                                       : " text-gray-400 border-transparent "
                                 } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                                 onClick={() => {
                                    setComponent((prev) => {
                                       return {
                                          ...prev,
                                          all: false,
                                          completed: false,
                                          failed: true,
                                       };
                                    });
                                    setFilters((prev) => {
                                       return { ...prev, status: "failed" };
                                    });
                                 }}
                              >
                                 Failed Transaction
                              </span>
                           </li>
                        </ul>
                     </div>
                     <div className="overflow-x-auto">
                        <AllTransaction />
                        <div className="p-4">
                           <Pagination
                              limit={filters?.limit}
                              skip={filters?.skip}
                              total={filters?.totalTransactions}
                              incOrDecSkip={(number) =>
                                 setFilters((prev) => {
                                    return {
                                       ...prev,
                                       skip: Number(prev.skip) + Number(number),
                                    };
                                 })
                              }
                              updateSkip={(skip) =>
                                 setFilters((prev) => {
                                    return { ...prev, skip };
                                 })
                              }
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Wallet;
