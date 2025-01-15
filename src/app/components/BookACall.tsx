"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const BookACall = ({
  label,
  isOpen,
  onClose,
}: {
  label: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className="flex animate-zoomIn mt-5 justify-center items-center">
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px] max-h-[70vh] overflow-y-auto">
          <h2 className="text-2xl ml-14 mt-5 fixed font-bold">{label}</h2>
          <ContactForm type="customer" onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookACall;
