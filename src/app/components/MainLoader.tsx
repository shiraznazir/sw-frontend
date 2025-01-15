"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import Logo from "./Logo";

const MainLoader = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <Logo />
        <Progress value={progress} className="w-[60%]" />
      </div>
    </div>
  );
};

export default MainLoader;
