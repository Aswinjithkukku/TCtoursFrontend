import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiParking1 } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
import { TbToolsKitchen2 } from "react-icons/tb";

function FacilitySection() {
   return (
      <div className="text-darktext pb-5">
         <h2 className="text-[20px] capitalize font-[700]">
            Facility of Hotel Name
         </h2>
         <div className=" pt-5">
            <span className="flex gap-2 items-center text-green-600">
               <p className="text-xl">
                  <CiParking1 />
               </p>
               <p className="uppercase text-[14px] font-semibold">Parking</p>
            </span>
            <div className="flex flex-wrap gap-5 mt-2">
               <div className="flex gap-2 items-start">
                  <p className="text-sky-500 text-lg">
                     <AiOutlineCheckCircle />
                  </p>
                  <p className="text-sm">
                     Free private parking is available on site (reservation is
                     not needed).
                  </p>
               </div>
               <div className="flex gap-2 items-center">
                  <p className="text-sky-500 text-lg">
                     <AiOutlineCheckCircle />
                  </p>
                  <p className="text-sm">A/C</p>
               </div>
            </div>
         </div>
         <div className=" pt-5">
            <span className="flex gap-2 items-center text-green-600">
               <p className="text-xl">
                  <SlScreenDesktop />
               </p>
               <p className="uppercase text-[14px] font-semibold">
                  Media & Technology
               </p>
            </span>
            <div className="flex flex-wrap gap-5 mt-2">
               <div className="flex gap-2 items-start">
                  <p className="text-sky-500 text-lg">
                     <AiOutlineCheckCircle />
                  </p>
                  <p className="text-sm">Flat-screen TV</p>
               </div>
               <div className="flex gap-2 items-center">
                  <p className="text-sky-500 text-lg">
                     <AiOutlineCheckCircle />
                  </p>
                  <p className="text-sm">Telephone</p>
               </div>
               <div className="flex gap-2 items-center">
                  <p className="text-sky-500 text-lg">
                     <AiOutlineCheckCircle />
                  </p>
                  <p className="text-sm">TV</p>
               </div>
            </div>
         </div>
         {[1,2,3].map(item => (
          <div className=" pt-5" key={item}>
          <span className="flex gap-2 items-center text-green-600">
             <p className="text-xl">
                <TbToolsKitchen2 />
             </p>
             <p className="uppercase text-[14px] font-semibold">Kitchen</p>
          </span>
          <div className="flex flex-wrap gap-5 mt-2">
             <div className="flex gap-2 items-start">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Dining table</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Coffee machine</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Toaster</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Stovetop</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Oven</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Dryer</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Kitchenware</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Electric kettle</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Washing machine</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Dishwasher</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Microwave</p>
             </div>
             <div className="flex gap-2 items-center">
                <p className="text-sky-500 text-lg">
                   <AiOutlineCheckCircle />
                </p>
                <p className="text-sm">Refrigerator</p>
             </div>
          </div>
       </div>
         ))}
      </div>
   );
}

export default FacilitySection;
