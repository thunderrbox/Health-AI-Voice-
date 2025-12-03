"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import AddNewSessionDialog from "./AddNewSessionDialog";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);
  return (
    <div className="mt-10">
      {historyList.length == 0 ? (
        <div className="flex items-center flex-col justify-center gap-4 mt-20 p-7 border-dashed rounded-2xl border-gray-300 border-2">
          <Image
            src={"/medical_assistance.png"}
            alt="empty"
            width={250}
            height={250}
            style={{ borderRadius: "10px" }}
          />
          <h2 className="font-bold text-xl mt-2">No Recent Consultations</h2>
          <p>It looks like you haven't consulted any doctor yet.</p>
          <AddNewSessionDialog />
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}

export default HistoryList;
