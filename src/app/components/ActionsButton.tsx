"use client";

import React from "react";
import { motion } from "framer-motion";

const ActionButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-24 right-0 md:bottom-28 z-50"
      >
        <a href="https://wa.me/9354063823" target="_blank" rel="noopener noreferrer">
          <div
            className="flex items-center shadow-2xl gap-2 px-6 py-4 hover:animate-bounce bg-green-500 text-white rounded-l-full rounded-r-none text-lg md:text-xl 
            hover:bg-green-600 dark:bg-green-700 dark:text-gray-200 dark:hover:bg-green-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                d="M12 2.002C6.478 2.002 2 6.48 2 12c0 1.95.512 3.805 1.479 5.455L2 22l4.62-1.444A9.945 9.945 0 0 0 12 22c5.522 0 10-4.478 10-10s-4.478-10-10-10Zm0 18c-1.646 0-3.23-.442-4.615-1.276l-.33-.193-2.734.854.891-2.607-.203-.335C4.442 15.23 4 13.647 4 12c0-4.411 3.589-8 8-8 4.411 0 8 3.589 8 8s-3.589 8-8 8Zm4.92-5.69c-.27-.135-1.59-.786-1.837-.875-.246-.09-.426-.135-.605.135-.18.27-.69.875-.843 1.05-.152.18-.31.202-.58.067-.27-.135-1.143-.423-2.176-1.348-.804-.713-1.347-1.595-1.506-1.865-.158-.27-.017-.414.119-.549.12-.118.27-.307.404-.46.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.47-.067-.135-.604-1.463-.827-2-.217-.52-.44-.45-.605-.457-.157-.007-.338-.01-.52-.01s-.48.067-.732.338c-.27.27-1.035 1.01-1.035 2.465 0 1.456 1.06 2.865 1.21 3.061.15.202 2.09 3.196 5.064 4.452.708.306 1.26.49 1.69.63.71.225 1.355.193 1.865.117.57-.085 1.59-.648 1.815-1.27.225-.623.225-1.157.157-1.27-.068-.113-.246-.18-.515-.315Z"
              />
            </svg>
          </div>
        </a>
      </motion.div>

      {/* Call Now Button */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-5 right-0 md:bottom-10 z-50"
      >
        <a href="tel:+919354063823" className="focus:outline-none">
          <div
            className="font-bold rounded-l-full rounded-r-none px-6 py-4 text-lg md:text-xl flex items-center gap-4 
            bg-blue-500 text-white hover:bg-blue-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 
            hover:animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default ActionButtons;
