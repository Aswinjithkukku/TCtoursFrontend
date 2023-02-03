import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import useHandleClickOutside from "../../../hooks/useHandleClickOutside";

function DocumentSampleCopy({ setSampleView }) {
  const wrapperRef = useRef();
  useHandleClickOutside(wrapperRef, () => setSampleView(false));

  const { visa } = useSelector(state => state.visa)
  return (
    <div className="fixed inset-0 w-full h-full lightglass flex items-center justify-center z-20 ">
      <div
        ref={wrapperRef}
        className="bg-[#fff] w-full max-h-[90vh] max-w-[600px]  shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-medium mb-2">Sample Visa Copy</h2>
          <button
            className="h-auto bg-transparent text-textColor text-xl"
            onClick={() => setSampleView(false)}
          >
            <MdClose />
          </button>
        </div>
        <div className="p-10 w-full">
            <img src={ process.env.REACT_APP_SERVER_URL + visa?.visa?.sampleVisa} alt="" className="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default DocumentSampleCopy;
