import React, { useEffect, useRef } from "react";
import { CgCloseR } from "react-icons/cg";

const Modal = ({ hideDrawer, children, title }) => {
  const drawerRef = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", ({ target }) => {
      if (!drawerRef.current.contains(target)) {
        hideDrawer();
      }
    });
  }, []);
  return (
    <div className="fixed top-0 right-[100vw] z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-[rgba(0,0,0,0.4)] w-[100vw] grid place-items-center pointer-events-auto">
      <div
        ref={drawerRef}
        id="drawer-right-example"
        className=" rounded-lg bg-white w-[60vw] h-[80vh] overflow-hidden transition-all transition-1000 relative"
      >
        <div className="text-blue-700 border-b-[1px] p-2 pl-4 flex justify-between items-center bg-gray-200">
          <h2 className="font-semibold text-[20px]">{title}</h2>
          <span className="text-[20px]  cursor-pointer" onClick={hideDrawer}>
            <CgCloseR />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
