import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [atTop, setAtTop] = useState(false);

    const toggleAtTop = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setAtTop(true);
        } else if (scrolled < 100) {
            setAtTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleAtTop);
    }, [atTop]);

    return (
        <header
            className={`sticky shadow-lg top-0 z-10 flex w-screen bg-slate-300 text-slate-900 ${!atTop ? "h-32" : ""}`}
        >
            <div className="m-auto flex max-w-6xl flex-1 items-center justify-between">
                {/* brand */}
                <div
                    onClick={scrollToTop}
                    className="flex flex-1 items-center md:mr-16 md:pl-8 md:hover:cursor-pointer md:hover:bg-slate-400"
                >
                    <Image
                        alt="navlogo"
                        src={"/mgdlogo-transparent-bg.png"}
                        width={`${!atTop ? 225 : 200}`}
                        height={`${!atTop ? 125 : 85}`}

                    />

                    {/* <HomeIcon className="mr-2 w-8 md:w-10" />
          <p className="font-dance font-bold whitespace-nowrap text-3xl md:text-4xl">MG Drywall U.S.A.</p> */}
                </div>

                {/* hamburger */}
                <div
                    className={`z-20 px-8 py-4 text-slate-800 md:hidden`}
                    onClick={() => setShowNav(!showNav)}
                >
                    {!showNav ? (
                        <MenuIcon className="w-10" />
                    ) : (
                        <XIcon className="w-10" />
                    )}
                </div>

                {/* menu */}
                <div className="hidden md:flex">
                    {["About", "Contact", "Projects"].map((navItem, i) => {
                        return (
                            <a
                                key={i}
                                className="border-b-slate border-b-4 border-b-slate-800 px-4 py-4 text-xl hover:border-b-slate-200 hover:bg-slate-400 hover:text-slate-200 md:mr-4 md:cursor-pointer"
                            >
                                {navItem}
                            </a>
                        );
                    })}
                </div>

                {/* mobile-menu */}
                <div
                    className={
                        !showNav
                            ? "hidden"
                            : "absolute top-0 left-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-slate-500"
                    }
                    onClick={() => setShowNav(!showNav)}
                >
                    {["About", "Contact", "Projects"].map((navItem, i) => {
                        return (
                            <a
                                key={i}
                                className="border-primary-focus cursor-pointer border-b-2 px-4 py-12 text-4xl"
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
