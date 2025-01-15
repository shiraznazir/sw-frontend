"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const ModeToggle = (): React.JSX.Element | null => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {

    return (
      <Button variant="outline" size="icon" disabled>
        <span className="sr-only">Loading...</span>
      </Button>
    );
  }

  const handleClick = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button className="animate-zoomIn" onClick={handleClick} variant="outline" size="icon">
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
