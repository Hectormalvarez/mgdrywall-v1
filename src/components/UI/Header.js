import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={`
            sticky top-0 z-10 flex w-screen bg-slate-300 text-slate-900 
            `}
    >
      <div className="m-auto flex flex-1 items-center justify-between xl:mx-auto xl:max-w-[80vw]">
        {/* brand */}
        <div className="flex items-center px-4 sm:mr-16 sm:px-8 sm:hover:cursor-pointer sm:hover:rounded-3xl sm:hover:bg-slate-100">
          <Link href={"/"} passHref>
            <Image
              alt="navlogo"
              src={"/mgdlogo-transparent-bg.png"}
              width={200}
              height={90}
            />
          </Link>
        </div>

        {/* hamburger */}
        <div
          className={`z-20 px-8 py-4 text-slate-800 sm:hidden`}
          onClick={() => setShowNav(!showNav)}
        >
          {!showNav ? (
            <MenuIcon className="w-10" />
          ) : (
            <XIcon className="w-10" />
          )}
        </div>

        {/* menu */}
        <div className="hidden sm:flex">
          {["About", "Contact", "Projects"].map((navItem, i) => {
            return (
              <a
                key={i}
                className="
                          border-b-slate border-b-4 border-b-slate-600 px-4 py-4 text-lg text-slate-600 hover:border-slate-100 hover:bg-slate-600 hover:text-slate-200
                          sm:mr-4 sm:cursor-pointer sm:hover:rounded-3xl md:text-2xl
                        "
              >
                {navItem}
              </a>
            );
          })}
        </div>

        {/* mobile-menu */}
        <div
          className={
            showNav
              ? "absolute top-0 left-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-slate-500"
              : "hidden"
          }
          onClick={() => setShowNav(!showNav)}
        >
          {["About", "Contact", "Projects"].map((navItem, i) => {
            return (
              <a
                key={i}
                className="cursor-pointer border-b-2 px-8 py-12 text-4xl text-slate-300"
              >
                {navItem}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
