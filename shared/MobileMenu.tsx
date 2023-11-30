"use client";
import { navLinks } from "@/constants";
import Button from "@/ui/Button";
import Route from "@/ui/route";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  X,
  AlignJustify,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const mobileMenuhandler = () => {
    setOpen(!open);
  };
  return (
    <div className="md:hidden">
      <div onClick={mobileMenuhandler} className="cursor-pointer">
        {open ? <X /> : <AlignJustify />}
      </div>
      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="fixed w-full h-screen top-0 eft
       bg-black/25 z-50 right-0 bottom-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute h-screen left-0 top-0  bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10 bar-menu `}
          >
            <div className="border-b py-5">
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-secondary text-center">
                  Travel Blog
                </h1>
              </Link>
            </div>
            <div className="flex gap-5 text-secondary justify-center text-xl mt-5">
              <Twitter />
              <Instagram />
              <Github />
              <Linkedin />
            </div>
            <ul className="flex flex-1 items-center justify-start gap-10 flex-col  text-xl">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Route
                    route={item.route}
                    label={item.label}
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex gap-5 flex-1 justify-center items-center">
              <Button
                text="Log In"
                aria="Log in button"
                onClick={() => null}
              ></Button>
              <Button
                text="Sign Up"
                aria="Sign up button"
                onClick={() => null}
              ></Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
