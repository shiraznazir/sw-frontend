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
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl">
          <ContactForm type="customer" onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookACall;
