import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setAlertError } from "../../../redux/slices/homeSlice";

function ErrorAlert() {
   const dispatch = useDispatch();
   const { alertError } = useSelector((state) => state.home);
  return (
   <div
   className={`bg-red-100 shadow-sm rounded-md fixed ${
      alertError?.status ? " right-5 " : " -right-full "
   }  bottom-24 right-5 z-10 max-w-[30%] text-gray-400 duration-500 transition-all`}
 >
   <div className="p-4">
     <div className="flex justify-between">
       <div className="flex gap-1">
         <span className="text-green-600">
           <IoMdCloseCircleOutline />
         </span>
         <span className="text-[13px] font-[600] text-slate-500 capitalize">
           {alertError?.title}
         </span>
       </div>
       <span
         onClick={() =>
          dispatch(
            setAlertError({
              status: false,
              title: "",
              text: "",
            })
          )
         }
       >
         <IoClose />
       </span>
     </div>
     <div className="mt-1">
       <p className="text-[9px] flex flex-wrap ">{alertError?.text}</p>
     </div>
   </div>
 </div>
  )
}

export default ErrorAlert