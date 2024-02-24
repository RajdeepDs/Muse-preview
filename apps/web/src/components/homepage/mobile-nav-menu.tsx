"use client";
import { useState } from "react";

export default function MobileNavMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center md:hidden">
      {" "}
      <div
        className="group flex flex-col items-center hover:cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <>
            <span className="h-[1px] w-4 translate-y-[1px] -rotate-45 bg-white transition-all duration-300" />
            <span className="h-[1px] w-4 rotate-45 bg-white transition-all duration-300" />
          </>
        ) : (
          <>
            <span className="h-[1px] w-4 origin-center translate-y-[5px] bg-white transition-all duration-300" />
            <span className="h-[1px] w-4 origin-center -translate-y-[5px] bg-white transition-all duration-300" />
          </>
        )}
      </div>
    </div>
  );
}
