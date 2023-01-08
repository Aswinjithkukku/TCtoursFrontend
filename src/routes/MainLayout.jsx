import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Layouts";
import { Footer } from "../components";
import { FloatIcon } from "../components";
import TopHeader from "../components/Header/TopHeader";
import BottomNavigator from "../components/BottomNavigator/BottomNavigator";

export default function MainLayout() {
    return (
        <main>
            <TopHeader />
            <Navbar />
            <Outlet />
            <Footer />

            <FloatIcon />
            <BottomNavigator />
        </main>
    );
}
