"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants";
import Route from "@/ui/route";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname()

  return (
    <div className="w-full py-5 bg-tertialy mt-10">
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <div className="py-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:flex-col max-md:gap-8">
          <div className="flex-1">
            <Link href={"/"}>
              <h1 className="text-3xl font-extrabold text-white">
                -Travel Blog-
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 flex-1">
            {navLinks.map((item,id:any) => (
              <li key={id} className="list-none">
                <Route className={`${item.route === pathname ? "text-primary":"text-white"} `} route={item.route} label={item.label} />
              </li>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-end gap-5">
            <span className="text-blue-500 hover:-translate-y-2 transition-all duration-300"><Facebook/></span>
            <span className="text-red-500 hover:-translate-y-2 transition-all duration-300"><Instagram/></span>
            <span className="text-blue-500 hover:-translate-y-2 transition-all duration-300"><Twitter/></span>
            <span className="text-zinc-400 hover:-translate-y-2 transition-all duration-300"><Github/></span>
            <span className="text-blue-500 hover:-translate-y-2 transition-all duration-300"><Linkedin/></span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
        <span className=" text-white">&copy; Utku Toygun Bektaşoğlu</span>

        </div>
      </div>
    </div>
  );
};

export default Footer;
