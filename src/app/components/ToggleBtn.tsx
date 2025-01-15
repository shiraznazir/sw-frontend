"use client";

import React from "react";

interface ToggleBtnProps {
  mobView: boolean;
  setMobView: (value: boolean) => void;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ mobView, setMobView }) => {
  return (
    <div className="block md:hidden" onClick={() => setMobView(!mobView)}>
      {mobView ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </div>
  );
};

export default ToggleBtn;
