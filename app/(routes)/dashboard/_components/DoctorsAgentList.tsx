import { AIDoctorAgents } from "@/share/list";
import React from "react";
import DoctorAgentCard from "./DoctorAgentCard";

function DoctorsAgentList() {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">AI Specialist Doctors Agent</h2>

      <div className=" grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 p-5 border rounded-xl shadow-md bg-white">
        {AIDoctorAgents.map((doctor: any, index) => (
          <div key={index}>
            <DoctorAgentCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsAgentList;
