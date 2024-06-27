"use client";

import Sidebar from "@/components/organisms/sidebar";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="w-full min-h-[100vh] max-h-max pb-6 relative ">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <nav className="w-full h-max p-4 fixed top-0 left-0 z-10 flex items-center gap-3 justify-between border-b border-gray-300">
        <div className="w-max h-max">
          <button
            className="w-max h-max py-2 px-3 rounded-md flex items-center gap-1 bg-purple-200 hover:bg-purple-100"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <RiMenu2Line className="text-purple-500 text-[1.1rem] text-bold " />
          </button>
        </div>
        <div className="w-max h-max flex items-center gap-2">
          <button className="w-max h-max py-2 px-3 rounded-md flex items-center gap-1 bg-purple-200 hover:bg-purple-100">
            <span className="text-[.8rem] text-purple-500 font-semibold hidden lg:inline-block">
              Suka
            </span>
            <CiHeart className="text-purple-500 text-[1.1rem] text-bold " />
          </button>
          <button className="w-max h-max py-2 px-3 rounded-md flex items-center gap-1 bg-purple-200                                                                                    hover:bg-purple-100">
            <span className="text-[.8rem] text-purple-500 font-semibold hidden lg:inline-block">
              Keranjang
            </span>
            <BsCart className="text-purple-500 text-[1rem]" />
          </button>
          <div className="w-max h-max bg-transparentrounded-full">
            <img
              src="/gojo.jpeg"
              alt="img_profile"
              className="w-9 h-9 p-1 rounded-full ring-1 ring-gray-500 object-cover"
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
