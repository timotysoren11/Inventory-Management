import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />


            {/* Main Area */}
            <div className="flex min-w-0 flex-1 flex-col">

                {/* Topbar */}
                <Topbar
                    setSidebarOpen={setSidebarOpen}
                />


                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;