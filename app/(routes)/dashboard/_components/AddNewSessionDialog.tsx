"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  ArrowBigRight,
  ArrowRightIcon,
  Loader2,
  Loader2Icon,
} from "lucide-react";
import axios from "axios";
import { doctorAgent } from "./DoctorAgentCard";

function AddNewSessionDialog() {
  const [note, setNote] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [suggestedDoctors, setSuggestedDoctors] =
    React.useState<doctorAgent[]>();
  const OnClickNext = async () => {
    setLoading(true);
    const result = await axios.post("/api/suggest-doctors", {
      notes: note,
    });
    console.log(result.data);
    setSuggestedDoctors(result.data);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Consult with Doctor</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            {!suggestedDoctors ? (
              <div>
                <h2>Add Symptoms or Any Other Details</h2>
                <Textarea
                  placeholder="Add Detail here...."
                  className="h-[200px] mt-4"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            ) : (
              <div>{/* //Suggested Doctors List */}</div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {!suggestedDoctors ? (
            <Button disabled={!note} onClick={() => OnClickNext()}>
              Next{" "}
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <ArrowBigRight />
              )}
            </Button>
          ) : (
            <Button>Start Consultation</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;
