import React from "react";

function Sidebar() {
  return (
    <span className="sticky top-0 flex h-screen justify-center flex-col min-h-screen w-48  bg-teal-900 text-white">
      <div className="">
        <h2>Dashboard</h2>
        <div className="mb-2 ">Patients</div>
        <div className="mb-2 ">HR</div>
        <div className="mb-2 ">Labs</div>
        <div className="mb-2 ">Pharma</div>
      </div>
      <div className="h-1/2">
        <h2>Processes</h2>
        <div className="mb-2 ">Registration</div>
        <div className="mb-2 ">Consultation</div>
        <div className="mb-2 ">Tests & Results</div>
        <div className="mb-2 ">Billing</div>
      </div>
    </span>
  );
}

export default Sidebar;
