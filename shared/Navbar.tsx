"use client";
import { navLinks } from "@/constants";
import Button from "@/ui/Button";
import Route from "@/ui/route";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className="py-4 w-full">
      <div className="w-[95%] mx-auto max-w-[1450px] flex items-center justify-between pb-5 border-b border-gray-100">
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-secondary cursor-pointer">
              Travel Blog
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden mr-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Route
                className={`${item.route === pathname ? "text-primary" : ""}`}
                route={item.route}
                label={item.label}
              />
            </li>
          ))}
        </ul>
        <div className="flex gap-5 justify-end max-md:hidden items-center">
          {session?.user?.name ? (
            <>
              <div>Hi,{session?.user?.name}</div>
              <div>
                <img
                  className="rounded-full w-12 h-12"
                  src={session?.user?.image ?? undefined}
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link href={"/login"}>
                {" "}
                <Button
                  text="Log In"
                  onClick={() => null}
                  aria="log In Button"
                ></Button>
              </Link>
              <Link href={"/signup"}>
                {" "}
                <Button
                  text="Sign Up"
                  onClick={() => null}
                  aria="Sign Up Button"
                ></Button>
              </Link>
            </>
          )}
        </div>
        <div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
