import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

function Topbar({ setSidebarOpen }) {

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-3 sm:px-6">

            {/* Left Section */}
            <div className="flex min-w-0 items-center gap-3">

                {/* Hamburger */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
                    aria-label="Open menu"
                >
                    <FiMenu size={24} />
                </button>


                {/* Search */}
                <div className="flex w-40 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 sm:w-64 md:w-80">

                    <CiSearch
                        size={20}
                        className="shrink-0 text-gray-500"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full min-w-0 bg-transparent p-2 text-sm outline-none"
                    />

                </div>

            </div>


            {/* Right Section */}
            <div className="ml-3 flex shrink-0 items-center gap-3 sm:gap-5">

                {/* Notification */}
                <button
                    className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    aria-label="Notifications"
                >
                    <IoNotificationsOutline size={22} />

                    {/* Notification Dot */}
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>


                {/* User */}
                <div className="flex items-center gap-2">

                    {/* Avatar */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                        A
                    </div>

                    {/* User Information */}
                    <div className="hidden flex-col sm:flex">
                        <strong className="text-sm font-semibold text-gray-800">
                            Admin
                        </strong>

                        <small className="text-xs text-gray-500">
                            Administrator
                        </small>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default Topbar;