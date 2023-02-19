import React from 'react'
import { useLocation, useNavigate } from 'react-router';

function MarkupsNavigation() {
   const navigate = useNavigate();
   const location = useLocation()
  return (
   <div>
   <div className="w-full px-6 mt-8">
     <ul className="flex flex-wrap -mb-4">
       <li className="mb-4 mr-8">
         <span
           className={`inline-block pb-4 ${
             location.pathname === "/b2b/markup/attraction" 
               ? " text-blue-500 border-blue-500  "
               : " text-gray-400 border-transparent "
           } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
           href="#"
           onClick={() => navigate("/b2b/markup/attraction")}
         >
           Attractions
         </span>
       </li>
       <li className="mb-4 mr-8">
         <span
           className={`inline-block pb-4 ${
             location.pathname === "/b2b/markup/visa"
               ? " text-blue-500 border-blue-500  "
               : " text-gray-400 border-transparent "
           } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
           href="#"
            onClick={() => navigate("/b2b/markup/visa")}
         >
           Visa
         </span>
       </li>
     </ul>
   </div>
 </div>
  )
}

export default MarkupsNavigation