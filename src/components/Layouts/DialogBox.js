import React from "react";

function DialogBox({title, text, children}) {

   return (
      <div class="group relative flex">
        {children}
        <span class="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2  text-white group-hover:scale-100 z-50">
         <p className="text-[10px] font-[500]">{title}</p>
         <p className="text-[9px]">{text}</p>
        </span>
    </div>
   );
}

export default DialogBox;
