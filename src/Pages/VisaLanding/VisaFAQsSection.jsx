import React from "react";

function VisaFAQsSection({ faqList }) {
  return (
    <div className="py-5">
      <div className="font-medium text-2xl text-darktext pb-5 mx-4 lg:mx-0">
        Dubai Visa FAQs
      </div>
      <div className="bg-light text-darktext font-light cursor-pointer lg:rounded-2xl">
        {faqList?.map((ele, i) => (
          <div className="p-5 relative border-b" key={ele?._id}>
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-10 opacity-0  cursor-pointer"
            />
            <div className="flex items-center space-x-3 ">
              <span className="">+</span>
              <span className="text-lightblue">{ele?.question}</span>
            </div>
            <div
              className={`text-sm text-text font-light overflow-hidden  max-h-0 peer-checked:max-h-[100vh] transition-all duration-700 `}
            >
              <div className="p-4">
                <p className="">{ele?.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisaFAQsSection;
