import React from "react";
import {
  FaChartLine,
  FaHome,
  FaTruck,
  FaArrowLeft,
  FaPeopleArrows,
  FaBox,
  FaTruckLoading,
  FaPhoneSquare,
  FaSquare,
  FaCalculator,
  FaRegStar,
  FaChevronDown,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white shadow-md p-4">
      <ul className="space-y-2">
        <li className="flex items-center p-2 bg-purple-100 rounded">
          <FaChartLine className="mr-2 text-purple-700" />
          <span className="text-purple-700 font-semibold">Dashboard</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaHome className="mr-2 text-pink-500" />
          <span className="text-gray-500">Inventory</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaTruck className="mr-2 text-yellow-500" />
          <span className="text-gray-500">Order</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaArrowLeft className="mr-2 text-green-500" />
          <span className="text-gray-500">Returns</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaPeopleArrows className="mr-2 text-red-400" />
          <span className="text-gray-500">Customers</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaTruckLoading className="mr-2 text-yellow-600" />
          <span className="text-gray-500">Shipping</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaPhoneSquare className="mr-2 text-red-500" />
          <span className="text-gray-500">Channel</span>
        </li>
        <li className="flex items-center p-2 hover:bg-purple-100 rounded">
          <FaSquare className="mr-2 text-[#3e3f3f]" />
          <span className="text-gray-500">Integrations</span>
        </li>
        <li className="flex justify-between items-center p-2 hover:bg-purple-100 rounded">
          <div className="flex items-center">
            <FaCalculator className="mr-2 text-[#1d2b4d]" />
            <span className="text-gray-500">Calculators</span>
          </div>
          <FaChevronDown className="text-gray-500 size-3" />
        </li>
        <li className="flex justify-between items-center p-2 hover:bg-purple-100 rounded">
          <div className="flex items-center">
            <FaBox className="mr-2 text-[#a3a6ad]" />
            <span className="text-gray-500">Reports</span>
          </div>
          <FaChevronDown className="text-gray-500 size-3" />
        </li>
        <li className="flex justify-between items-center p-2 hover:bg-purple-100 rounded">
          <div className="flex items-center">
            <FaCog className="mr-2 text-[#323233]" />
            <span className="text-gray-500">Account</span>
          </div>
          <FaChevronDown className="text-gray-500 size-3" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
