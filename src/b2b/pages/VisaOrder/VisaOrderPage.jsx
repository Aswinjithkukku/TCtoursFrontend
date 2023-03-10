import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import axios from "../../../axios";
import { PageLoader, Pagination } from "../../components";
import OrdersNavigator from "../OrdersNavigator";
import VisaOrderSingleRow from "./VisaOrderSingleRow";
import InfiniteScroll from "react-infinite-scroll-component";

function VisaOrderPage() {
   const [isLoading, setIsLoading] = useState(false);
   const [allVisaOrder, setAllVisaOrder] = useState([]);
   const [filters, setFilters] = useState({
      skip: 0,
      limit: 20,
      totalVisaApplication: 0,
      search: "",
      hasMore: true,
   });

   const [searchParams, setSearchParams] = useSearchParams();
   const { token } = useSelector((state) => state.agents);

   const prevSearchParams = (e) => {
      let params = {};
      for (let [key, value] of searchParams.entries()) {
         params[key] = value;
      }
      return params;
   };

   const handleChange = (e) => {
      let params = prevSearchParams();
      setSearchParams({
         ...params,
         [e.target.name]: e.target.value,
         skip: 0,
      });
   };

   const fetchAllVisaOrder = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get(`/b2b/visa/application/list/all`, {
            headers: {
               authorization: `Bearer ${token}`,
            },
         });
         //  setAllVisaOrder(response.data);

         response?.data?.visaApplication
            ? setAllVisaOrder((prev) => [
                 ...new Set([...prev, ...response?.data?.visaApplication]),
              ])
            : setAllVisaOrder([]);

         setFilters((prev) => {
            return {
               ...prev,
               totalVisaApplication: response?.data?.totalVisaApplication || 0,
               hasMore:
                  response?.data?.totalVisaApplication >= allVisaOrder?.length,
            };
         });
         setIsLoading(false);
      } catch (err) {
         console.log(err);
         throw Error("Cant find Order List");
      }
   };

   //  useEffect(() => {
   //     let skip =
   //        Number(searchParams.get("skip")) > 0
   //           ? Number(searchParams.get("skip")) - 1
   //           : 0;
   //     let limit =
   //        Number(searchParams.get("limit")) > 0
   //           ? Number(searchParams.get("limit"))
   //           : 10;
   //     let search = searchParams.get("search") || "";

   //     setFilters((prev) => {
   //        return { ...prev, skip, limit, search };
   //     });
   //     fetchAllVisaOrder({ skip, limit, search });
   //  }, [searchParams]);
   useEffect(() => {
      fetchAllVisaOrder({ ...filters });
   }, [filters.skip]);

   return (
      <>
         <div className=" ">
            <OrdersNavigator />
            <div className="p-2 lg:px-6">
               <div className="">
                  <div className="flex items-center justify-end border-b border-dashed p-4">
                     <span className="w-[400px]">
                        <input
                           type="search"
                           className="h-10 rounded-lg outline-none border px-2 w-full text-textColor"
                           placeholder="search!!!!!"
                           name="search"
                           value={filters.search}
                           onChange={handleChange}
                        />
                     </span>
                  </div>
                  <div>
                     {isLoading ? (
                        <PageLoader />
                     ) : (
                        <div className="overflow-x-auto">
                           <InfiniteScroll
                              dataLength={allVisaOrder?.length || 0}
                              next={() => {
                                 setFilters((prev) => {
                                    return { ...prev, skip: prev.skip + 1 };
                                 });
                              }}
                              hasMore={filters.hasMore}
                           >
                              <table className="w-full">
                                 <thead className="bg-gray-100 text-grayColor text-[14px] text-left">
                                    <tr>
                                       <th className="font-[500] p-3 whitespace-nowrap">
                                          Reference Number
                                       </th>
                                       <th className="font-[500] p-3 whitespace-nowrap">
                                          Country
                                       </th>
                                       <th className="font-[500] p-3 whitespace-nowrap">
                                          Travellers
                                       </th>
                                       <th className="font-[500] p-3 whitespace-nowrap">
                                          Default Price
                                       </th>
                                       <th className="font-[500] p-3 whitespace-nowrap">
                                          Status
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody className="text-sm text-textColor">
                                    {allVisaOrder?.map((item, index) => (
                                       <VisaOrderSingleRow
                                          key={index}
                                          item={item}
                                       />
                                    ))}
                                 </tbody>
                              </table>
                           </InfiniteScroll>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default VisaOrderPage;
