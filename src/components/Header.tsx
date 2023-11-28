"use client";

import config from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const onOpenSidebar = () => {
    setOpenSidebar(true);
  };

  return (
    <>
      <header className="absolute top-0 h-14 w-full">
        <div className="sm:hidden h-full flex px-6">
          <button className="my-auto" onClick={onOpenSidebar}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
              alt="menu"
              className="h-8 w-8"
            />
          </button>
        </div>
        <div className="w-full h-full flex justify-end gap-4 px-6 max-sm:hidden">
          {config.header.links.map((link) => {
            const textColor =
              pathname == link.path ? "text-black" : "text-[#0008]";
            return (
              <Link
                href={link.path}
                key={link.label}
                className={`text-center my-auto font-light no-underline visited:text-black hover:text-black ${textColor}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </header>
      <div
        className={`absolute top-0 left-0 min-h-screen w-full z-50 bg-[#000A] ${
          openSidebar ? "" : "hidden"
        }`}
        onClick={onCloseSidebar}
      >
        <div className="min-h-screen bg-black w-64">
          <div className="flex flex-col gap-4 px-6 py-14">
            {config.header.links.map((link) => {
              const textColor =
                pathname == link.path ? "text-white" : "text-[#fff8]";
              return (
                <Link
                  href={link.path}
                  key={link.label}
                  className={`font-light no-underline visited:text-white hover:text-white ${textColor}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
