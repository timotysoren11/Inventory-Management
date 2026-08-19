import {
    FaHome,
    FaProductHunt,
    FaPeopleCarry,
    FaShoppingCart
} from "react-icons/fa";

import {
    BiSolidCategoryAlt,
    BiSolidPurchaseTag
} from "react-icons/bi";

import { MdInventory2 } from "react-icons/md";

import {
    IoMdLogOut,
    IoMdClose
} from "react-icons/io";

import { LiaCubesSolid } from "react-icons/lia";

import { NavLink } from "react-router-dom";


function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const menuItems = [
        {
            name: "Dashboard",
            path: "/",
            icon: <FaHome size={20} />,
        },
        {
            name: "Products",
            path: "/products",
            icon: <FaProductHunt size={20} />,
        },
        {
            name: "Categories",
            path: "/category",
            icon: <BiSolidCategoryAlt size={20} />,
        },
        {
            name: "Suppliers",
            path: "/supplier",
            icon: <FaPeopleCarry size={20} />,
        },
        {
            name: "Purchases",
            path: "/purchase",
            icon: <BiSolidPurchaseTag size={20} />,
        },
        {
            name: "Sales",
            path: "/sale",
            icon: <FaShoppingCart size={20} />,
        },
        {
            name: "Inventory",
            path: "/inventory",
            icon: <MdInventory2 size={20} />,
        },
    ];


    return (
        <>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}


            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50
                    flex w-64 shrink-0 flex-col
                    bg-gray-950
                    shadow-xl
                    transition-transform duration-300 ease-in-out

                    md:static
                    md:min-h-screen
                    md:translate-x-0

                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >

                {/* Logo */}
                <div className="flex items-center justify-between border-b border-gray-800 px-5 py-5">

                    <div className="flex items-center text-white">

                        <LiaCubesSolid size={42} />

                        <div className="ml-3">

                            <h2 className="text-sm font-bold">
                                Inventory
                            </h2>

                            <p className="text-sm text-gray-400">
                                Management
                            </p>

                        </div>

                    </div>


                    {/* Mobile Close */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white md:hidden"
                    >
                        <IoMdClose size={24} />
                    </button>

                </div>


                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-3 py-6">

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Main Menu
                    </p>


                    {menuItems.map((item) => (

                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}

                            className={({ isActive }) => `
                                flex items-center gap-3
                                rounded-lg
                                px-3 py-3
                                text-sm
                                transition

                                ${
                                    isActive
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }
                            `}
                        >

                            {item.icon}

                            <span>
                                {item.name}
                            </span>

                        </NavLink>

                    ))}

                </nav>


                {/* Logout */}
                <div className="border-t border-gray-800 p-3">

                    <button
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
                    >

                        <IoMdLogOut size={20} />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>

        </>
    );
}

export default Sidebar;