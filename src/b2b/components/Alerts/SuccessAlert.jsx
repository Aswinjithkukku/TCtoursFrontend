import React, { useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setAlertSuccess } from "../../../redux/slices/homeSlice";

function SuccessAlert() {
  const dispatch = useDispatch();
  const { alertSuccess } = useSelector((state) => state.home);

  useEffect(() => {
    if (alertSuccess?.status === true) {
      setTimeout(() => {
        dispatch(
          setAlertSuccess({
            status: false,
            title: "",
            text: "",
          })
        );
      }, 5000);
    }
  }, [alertSuccess?.status]);

  return (
    <div
      className={`bg-green-100 shadow-sm rounded-md fixed ${
        alertSuccess?.status === true ? " right-5 " : " right-[-100vw] "
      }  bottom-24 right-5 z-50 max-w-[55%] lg:max-w-[35%] text-gray-400 duration-500 transition-all`}
    >
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <span className="text-green-600">
              <BsCheckCircle />
            </span>
            <span className="text-[13px] font-[600] text-slate-500 capitalize">
              {alertSuccess?.title}
            </span>
          </div>
          <span
            onClick={() =>
              dispatch(
                setAlertSuccess({
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
          <p className="text-[9px] flex flex-wrap ">{alertSuccess?.text}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessAlert;
