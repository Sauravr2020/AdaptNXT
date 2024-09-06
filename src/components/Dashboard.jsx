import React from "react";
import SalesOrdersChart from "../chartComponents/SalesOrdersChart";
import SalesPortionChart from "../chartComponents/SalesPortionChart";

const Dashboard = () => {
  return (
    <div className="p-6 flex gap-4 h-[1000px]">
      {/* Sales vs Orders Section */}
      <div className="w-2/3 bg-white border shadow-lg p-4 rounded-lg flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Sales vs Orders ⓘ</h2>
        </div>
        {/* Line under the title */}
        <div className="h-0.5 bg-gray-300 mb-4"></div>
        <SalesOrdersChart />
      </div>

      {/* Portion of Sales Section */}
      <div className="w-1/3 bg-white border shadow-lg p-4 rounded-lg flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Portion of Sales ⓘ</h2>
        </div>
        <div className="h-0.5 bg-gray-300 mb-4"></div>
        <SalesPortionChart />
      </div>
    </div>
  );
};

export default Dashboard;
