import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../b2b/components";
import ErrorAlert from "../b2b/components/Alerts/ErrorAlert";
import SuccessAlert from "../b2b/components/Alerts/SuccessAlert";
import BottomNav from "../b2b/components/BottomNavigattion/BottomNav";
import SessionModal from "../components/Layouts/SessionModal";

export default function B2BMainLayout() {
  const [sidebarView, setSidebarView] = useState(false);
  const { isLoggedIn } = useSelector(state => state.agents)
  return (
    <div className="relative">
      <Header sidebarView={sidebarView} setSidebarView={setSidebarView} />
      <main>
        <Sidebar sidebarView={sidebarView} setSidebarView={setSidebarView} />
        <div
          className={`${
            sidebarView ? "ml-[0px]" : "ml-[0px] lg:ml-[250px]"
          } min-h-screen lg:min-h-0 `}
        >
          <Outlet />
        </div>
        <SuccessAlert />
        <ErrorAlert />
        <BottomNav setSidebarView={setSidebarView} />
        {!isLoggedIn && <SessionModal />}
      </main>
    </div>
  );
}
