import React from "react";
import Sidebar from "../../components/ambulancedashboard/Sidebar3";
import StatsCard from "../../components/ambulancedashboard/StatsCard";
import MostOrdered from "../../components/ambulancedashboard/MostOrdered";
import Map from "../../components/map/mapadmin";

export default function index() {
  const date = Date();
  return (
    <div class="flex flex-col sm:flex-row w-full min-h-screen font-sans bg-slate-900">
      <Sidebar />
      <main class="flex flex-col flex-1 gap-6 p-4">
        <header className="h-[75%]">
          <div className="px-5">
            <h1 class="text-4xl ml-1 font-semibold leading-loose text-red-400">
              Police Dashboard
            </h1>
            <div class="text-gray-400 ml-1 mb-6">{date}</div>
          </div>
          <div className="px-5 shadow-sm">
            <StatsCard />
          </div>
          <div className="relative -mt-10 h-full w-full flex m-0 p-0 shadow-md rounded-2xl">
            <Map />
          </div>
        </header>
      </main>
      <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-[30rem]">
        <MostOrdered />
      </aside>
    </div>
  );
}
