"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const VenderEquiry = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className="flex justify-center items-center animate-slideIn">
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px] max-h-[70vh] overflow-y-auto">
          <h2 className="text-2xl ml-14 mt-5 fixed font-bold">
            Vendor Enquiry Form
          </h2>
          <ContactForm type="vender" onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VenderEquiry;
