import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../b2b/components";
import BottomNav from "../b2b/components/BottomNavigattion/BottomNav";

export default function B2BMainLayout() {
    const [sidebarView, setSidebarView] = useState(false)
    return (
        <div className="relative">
            <Header
                sidebarView={sidebarView}
                setSidebarView={setSidebarView} />
            <main>
                <Sidebar
                    sidebarView={sidebarView}
                    setSidebarView={setSidebarView}
                />
                <div className={`${sidebarView ? "ml-[0px]" : "ml-[0px] lg:ml-[300px]"} min-h-screen lg:min-h-0 `}>
                    <Outlet />
                </div>
                    <BottomNav />
            </main>
        </div>
    );
}
