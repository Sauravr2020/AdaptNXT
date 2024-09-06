import React from "react";
import { Button } from "antd";

const Header = () => {
  return (
    <div className="left-4 bg-gray-100 p-4 shadow-md">
      <div className="">
        <Button className="text-xl font-semibold text-purple-500">
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Header;
