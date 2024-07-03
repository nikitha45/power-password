import React from "react";
import Sidebar from "./components/Sidebar";
import AllPasswords from "./components/AllPasswords";
import PasswordDetails from "./components/PasswordDetails";

const App = () => {
  return (
    <div className="flex items-center justify-center bg-[#000000]">
      <div className="max-w-7xl grid xs:grid-cols-1 sm:grid-cols-1 minMd:grid-cols-2 md:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-3">
        <div>
          <Sidebar />
        </div>
        <div>
          <AllPasswords />
        </div>
        <div className="minMd:col-span-2 md:flex md:justify-center tablet:col-span-1 tablet:flex-none tablet:block">
          <PasswordDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
