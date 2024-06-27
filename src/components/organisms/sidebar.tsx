"use client";
import { IoCloseSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { GoSignOut } from "react-icons/go";
import { IoStorefrontSharp } from "react-icons/io5";
import ListMenu from "../atoms/listMenu";
import { signOut } from "next-auth/react";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: any) {
  const [isCategory, setIsCategory] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 w-64 h-screen  overflow-y-auto transition-transform  bg-slate-500 backdrop-blur-md ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-labelledby="drawer-navigation-label"
    >
      <div className="w-full h-[69px] p-4 border-b flex justify-between items-center">
        <h5
          id="drawer-navigation-label"
          className="text-[1.1rem] font-semibold text-white capitalize tracking-[1px] "
        >
          Heloes menu
        </h5>
        <button
          onClick={handleSidebar}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="w-max h-max"
        >
          <IoCloseSharp size={25} fill="white" />
        </button>
      </div>
      <div className="py-4 overflow-y-auto p-4">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              onClick={() => setIsCategory(!isCategory)}
              type="button"
              className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-purple-300"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <BiCategoryAlt size={25} fill="white" />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Category
              </span>
              <MdKeyboardArrowDown size={20} />
            </button>
            <ul
              id="dropdown-example"
              className={`${!isCategory ? "hidden" : ""} py-2 space-y-2`}
            >
              <ListMenu link="#" teks="Semua" />
              <ListMenu link="#" teks="Elektronik" />
              <ListMenu link="#" teks="Baju" />
              <ListMenu link="#" teks="Celana" />
            </ul>
          </li>

          <ListMenu
            link="#"
            teks="Store"
            icons1={<IoStorefrontSharp size={25} fill="white" />}
          />

          <li>
            <button
              onClick={async () => signOut()}
              className="flex items-center gap-3 w-full p-2 text-base  transition duration-75 rounded-lg   text-white hover:bg-purple-300"
            >
              <GoSignOut size={25} fill="white" />
              <span className="capitalize">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <li>
<a
  href="#"
  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
>
  <svg
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
  </svg>
  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
    3
  </span>
</a>
</li> */
}
