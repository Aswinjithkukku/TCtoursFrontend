import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios";
import {
   fetchResellers,
   setResellers,
} from "../../../redux/slices/resellerSlice";
import { PageLoader } from "../../components";
import ResellerChipList from "./ResellerChipList";

function Resellers() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");
   const [search, setSearch] = useState("");

   const { resellers } = useSelector((state) => state.resellers);
   const { token } = useSelector((state) => state.agents);

   const fetchResellers = async (search) => {
      try {
         setIsLoading(true);
         setError("");
         const response = await axios.get(
            `/b2b/resellers/listAll?search=${search}`,
            {
               headers: {
                  authorization: `Bearer ${token}`,
               },
            }
         );
         dispatch(setResellers(response.data));
         setIsLoading(false);
      } catch (error) {
         setError(
            error?.response?.data?.error || "Something went wrong, Try again"
         );
         setIsLoading(false);
      }
   };
   const deleteReseller = async (id) => {
      try {
         console.log(id);
         setError("");
         const response = await axios.delete(
            `/b2b/resellers/delete/${id}`,
            {
               headers: {
                  authorization: `Bearer ${token}`,
               },
            }
         );
         const result = resellers?.filter(item => item._id !== id)
         dispatch(setResellers(result));
      } catch (error) {
         setError(
            error?.response?.data?.error || "Something went wrong, Try again"
         );
      }
   };

   useEffect(() => {
      fetchResellers(search);
   }, [search]);

   return (
      <div className=" text-textColor">
         <div className="p-2 lg:p-6">
            <div className="">
               <div className="flex items-center justify-end border-b border-dashed p-3 lg:p-4">
                  <div className="flex h-12 gap-2">
                     <button
                        className="flex gap-1 h-full px-5 rounded-lg bg-blue-600 text-white items-center"
                        onClick={() => navigate("/b2b/reseller/add")}
                     >
                        <span className="">
                           <GoPlus />{" "}
                        </span>
                        <span className="font-[500]">Create </span>
                     </button>
                     <div className="md:w-[400px] h-full">
                        <input
                           type="search"
                           className="h-full rounded-lg px-2 w-full text-sm placeholder:text-gray-300 outline-none border-blue-400 border"
                           placeholder="Search by Name & Company!!!"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                        />
                     </div>
                  </div>
               </div>
               {isLoading ? (
                  <PageLoader />
               ) : (
                  <>
                     <div className="overflow-x-auto hidden lg:block">
                        <table className="w-full">
                           <thead className="bg-gray-100 text-grayColor text-[14px] text-left">
                              <tr>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Agent Code
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Company
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Representative Name
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Phone
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Whatsapp
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Email
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Designation
                                 </th>
                                 <th className="font-[500] p-3 whitespace-nowrap">
                                    Action
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="text-sm">
                              {resellers?.length > 0 ? (
                                 resellers?.map((item, index) => (
                                    <tr
                                       className="border-b border-tableBorderColor cursor-default"
                                       key={index}
                                       // onClick={() => navigate(`/b2b/reseller/${item?._id}`)}
                                    >
                                       <td className="p-3">
                                          {item?.agentCode}
                                       </td>
                                       <td className="p-3">
                                          <div className="w-[150px] md:w-auto">
                                             {item?.companyName}
                                          </div>
                                       </td>
                                       <td className="p-3">{item?.name}</td>
                                       <td className="p-3 ">
                                          {item?.phoneNumber}
                                       </td>
                                       <td className="p-3 ">
                                          {item?.whatsappNumber}
                                       </td>
                                       <td className="p-3">{item?.email}</td>
                                       <td className="p-3">
                                          {item?.designation}
                                       </td>
                                       <td className="p-3 flex gap-2">
                                          <span
                                             className="text-xl text-lightblue"
                                             onClick={() =>
                                                navigate(
                                                   `/b2b/reseller/${item?._id}`
                                                )
                                             }
                                          >
                                             <AiFillEye />{" "}
                                          </span>
                                          <span
                                             className="text-xl text-lightblue"
                                             onClick={() =>
                                                navigate(
                                                   `/b2b/reseller/${item?._id}/edit`
                                                )
                                             }
                                          >
                                             <AiFillEdit />{" "}
                                          </span>
                                          <span className="text-xl text-main"
                                          onClick={() => deleteReseller(item?._id)}
                                          >
                                             <AiFillDelete />{" "}
                                          </span>
                                       </td>
                                    </tr>
                                 ))
                              ) : (
                                 <tr className="border-b border-tableBorderColor">
                                    <td colSpan="8" className="p-3 ">
                                       <div className="flex justify-center my-10 text-[14px] text-gray-400 font-[500]">
                                          OOps...! No data found
                                       </div>
                                    </td>
                                 </tr>
                              )}
                           </tbody>
                        </table>
                     </div>
                     <div className="lg:hidden">
                        {resellers?.length > 0 ? (
                           resellers?.map((item) => (
                              <ResellerChipList item={item} key={item?._id} />
                           ))
                        ) : (
                           <div className="border-b border-tableBorderColor">
                              <div className="p-3 ">
                                 <div className="flex justify-center my-10 text-[14px] text-gray-400 font-[500]">
                                    OOps...! No data found
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

export default Resellers;
