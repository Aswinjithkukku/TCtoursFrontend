import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../b2b/components";

export default function B2BMainLayout() {
    return (
        <div>
            <Sidebar />
            <main className="ml-[250px]">
                <Header />
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
