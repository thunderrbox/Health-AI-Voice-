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
import { ArrowBigRight, ArrowRightIcon } from "lucide-react";

function AddNewSessionDialog() {
  const [note, setNote] = React.useState<string>("");
  return (
    <Dialog>
      <DialogTrigger>
        <Button>+ Consult with Doctor</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2>Add Symptoms or Any Other Details</h2>
              <Textarea
                placeholder="Add Detail here...."
                className="h-[200px] mt-4"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button disabled={!note}>
            Next <ArrowBigRight />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;
