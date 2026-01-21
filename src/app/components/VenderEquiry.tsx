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
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl">
          <ContactForm type="vender" onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VenderEquiry;
