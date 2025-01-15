import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className={`dark:bg-white animate-zoomIn rounded-lg dark:text-black p-2 w-32 my-8`}>
        <Image
          className="animate-slideIn"
          width={100}
          height={100}
          src={"/images/logo.png"}
          priority
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
