"use client";

import React, { useEffect, useState } from "react";
import Body from "@/app/components/Home/Body";
import Choose from "@/app/components/Home/Choose";
import Services from "@/app/components/Home/Services";
import Clients from "./components/Home/Clients";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`max-w-screen-xl mx-auto`}>
      <Body />
      <Services />
      <Choose />
      <Clients />
    </div>
  );
};

export default Home;
