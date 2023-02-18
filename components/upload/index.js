import React from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import UploadPage from "./uploadpage";

const UploadLayout = () => {
  return (
    <div className="">
      <Sidebar className="relative" />
      <Header classname="z-10" />
      <main className="bg-[#1f1f1f] flex-1 p-6 lg:px-8">
        <UploadPage />
      </main>
    </div>
  );
};

export default UploadLayout;
