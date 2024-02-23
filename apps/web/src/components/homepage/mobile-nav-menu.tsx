"use client";
import { useState } from "react";

export default function MobileNavMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState("close");

  const toggleMenu = () => {
    setIsOpen((prev) => (prev === "open" ? "close" : "open"));
  };

  return (
    <div className="flex">
      <div
        data-state={isOpen}
        className="group flex flex-col items-center hover:cursor-pointer data-[state=open]:gap-y-2"
        onClick={toggleMenu}
      >
        <span className="h-[1px] w-4 origin-center bg-white transition-all duration-300 group-data-[state=close]:rotate-45" />
        <span className="h-[1px] w-4 origin-center bg-white transition-all duration-300 group-data-[state=close]:-rotate-45" />
      </div>
    </div>
  );
}
