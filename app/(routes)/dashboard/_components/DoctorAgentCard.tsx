import { Button } from "@/components/ui/button";
import { IconArrowAutofitContent, IconArrowAutofitDownFilled, IconArrowAutofitRight, IconArrowRight } from "@tabler/icons-react";
import React from "react";

type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
};

type props = {
  doctorAgent: doctorAgent;
};

export default function DoctorCard({ doctorAgent }: props) {
  return (
    <div>
      <img
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={200}
        height={300}
        className="w-full h-[250px] object-cover rounded-2xl"
      />
      <div>
        <h2 className="text-xl font-semibold">{doctorAgent.specialist}</h2>
        <p className="text-gray-600 line-clamp-2 mt-2">
          {doctorAgent.description}
        </p>
        {/* <p className="text-sm text-blue-600 mt-2 ">{doctorAgent.agentPrompt}</p> */}
        <Button className="w-full mt-5">Start Consult  <IconArrowAutofitRight /> </Button>
      </div>
    </div>
  );
}
