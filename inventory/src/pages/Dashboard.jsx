import { FaBox, FaShoppingCart } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { IoWarning } from "react-icons/io5";


function Dashboard() {

    const stats = [
        {
            title: "Total Products",
            value: "250",
            icon: <FaBox size={22} />,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            text: "View all products",
        },
        {
            title: "Total Stock",
            value: "1,450",
            icon: <MdInventory2 size={24} />,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            text: "View inventory",
        },
        {
            title: "Total Sales",
            value: "₹1,25,000",
            icon: <FaShoppingCart size={22} />,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            text: "View sales",
        },
        {
            title: "Low Stock",
            value: "12",
            icon: <IoWarning size={23} />,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
            text: "View low stock",
        },
    ];


    return (
        <>
            {/* Header */}
            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Welcome back, Admin! Here's what's happening today.
                </p>

            </div>


            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => (

                    <div
                        key={stat.title}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p className="text-sm font-medium text-gray-500">
                                    {stat.title}
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    {stat.value}
                                </h2>

                            </div>


                            <div
                                className={`
                                    flex h-11 w-11 items-center justify-center
                                    rounded-lg
                                    ${stat.iconBg}
                                    ${stat.iconColor}
                                `}
                            >
                                {stat.icon}
                            </div>

                        </div>


                        <button
                            className={`
                                mt-4 text-sm font-medium
                                ${stat.iconColor}
                                hover:underline
                            `}
                        >
                            {stat.text} →
                        </button>

                    </div>

                ))}

            </div>


            {/* Bottom Section */}
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

                {/* Recent Transactions */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                    <div className="mb-4 flex items-center justify-between">

                        <h2 className="text-lg font-semibold text-gray-900">
                            Recent Transactions
                        </h2>

                        <button className="text-sm font-medium text-blue-600 hover:underline">
                            View All
                        </button>

                    </div>


                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[500px] text-left text-sm">

                            <thead className="border-b text-xs uppercase text-gray-500">

                                <tr>
                                    <th className="px-3 py-3">
                                        Product
                                    </th>

                                    <th className="px-3 py-3">
                                        Type
                                    </th>

                                    <th className="px-3 py-3">
                                        Quantity
                                    </th>

                                    <th className="px-3 py-3">
                                        Date
                                    </th>
                                </tr>

                            </thead>


                            <tbody>

                                <tr className="border-b">
                                    <td className="px-3 py-3 font-medium">
                                        Laptop
                                    </td>

                                    <td className="px-3 py-3 text-green-600">
                                        Purchase
                                    </td>

                                    <td className="px-3 py-3">
                                        20
                                    </td>

                                    <td className="px-3 py-3 text-gray-500">
                                        Today
                                    </td>
                                </tr>


                                <tr className="border-b">
                                    <td className="px-3 py-3 font-medium">
                                        Mouse
                                    </td>

                                    <td className="px-3 py-3 text-red-600">
                                        Sale
                                    </td>

                                    <td className="px-3 py-3">
                                        5
                                    </td>

                                    <td className="px-3 py-3 text-gray-500">
                                        Today
                                    </td>
                                </tr>


                                <tr>
                                    <td className="px-3 py-3 font-medium">
                                        Keyboard
                                    </td>

                                    <td className="px-3 py-3 text-green-600">
                                        Purchase
                                    </td>

                                    <td className="px-3 py-3">
                                        15
                                    </td>

                                    <td className="px-3 py-3 text-gray-500">
                                        Yesterday
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>


                {/* Low Stock */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                    <div className="mb-4 flex items-center justify-between">

                        <h2 className="text-lg font-semibold text-gray-900">
                            Low Stock Products
                        </h2>

                        <button className="text-sm font-medium text-orange-600 hover:underline">
                            View All
                        </button>

                    </div>


                    <div className="space-y-4">

                        <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3">

                            <div>
                                <p className="font-medium text-gray-900">
                                    Wireless Mouse
                                </p>

                                <p className="text-xs text-gray-500">
                                    Minimum stock: 10
                                </p>
                            </div>

                            <span className="font-bold text-orange-600">
                                4 left
                            </span>

                        </div>


                        <div className="flex items-center justify-between rounded-lg bg-red-50 p-3">

                            <div>
                                <p className="font-medium text-gray-900">
                                    Keyboard
                                </p>

                                <p className="text-xs text-gray-500">
                                    Minimum stock: 10
                                </p>
                            </div>

                            <span className="font-bold text-red-600">
                                3 left
                            </span>

                        </div>


                        <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3">

                            <div>
                                <p className="font-medium text-gray-900">
                                    Monitor
                                </p>

                                <p className="text-xs text-gray-500">
                                    Minimum stock: 5
                                </p>
                            </div>

                            <span className="font-bold text-orange-600">
                                2 left
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;