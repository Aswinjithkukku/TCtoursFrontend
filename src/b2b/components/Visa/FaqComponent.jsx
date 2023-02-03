import React, { useState } from "react";

function FaqComponent({ item }) {
    const [view, setView] = useState(false)

  return (
    <div className="p-5 relative border-b">
      <div className="flex items-center space-x-3" 
      onClick={() => setView(!view)}
      >
        <span className="">+</span>
        <span className="text-lightblue">{item?.question}</span>
      </div>
      <div
        className={`text-sm text-text font-light overflow-hidden ${view ? " max-h-[100vh] " : " max-h-0" }   transition-all duration-700 `}
      >
        <div className="p-4">
          <p className="">
            {item?.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqComponent;
