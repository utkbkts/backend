"use client";
import { navLinks } from "@/constants";
import Button from "@/ui/Button";
import Route from "@/ui/route";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
interface Props {
  user: User;
}

const Navbar: React.FC<Props> = ({ user }) => {
  const pathname = usePathname();
  const router =useRouter()
  const [IsOpenUserMenu, setIsOpenUserMenu] = useState(false);
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
        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden mr-4 flex-1">
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
        <div className="flex gap-5 justify-end max-md:hidden items-center flex-1">
          {user ? (
            <>
              <div>Hi,{user?.name}</div>
              <div>
                <img
                  onClick={() => setIsOpenUserMenu(!IsOpenUserMenu)}
                  className="rounded-full w-12 h-12 cursor-pointer"
                  src={user?.image ?? undefined}
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button
                  text="Log In"
                  aria="log In Button"
                ></Button>
              </Link>
              <Link href={"/signup"}>
                <Button
                  text="Sign Up"
                  aria="Sign Up Button"
                ></Button>
              </Link>
            </>
          )}
          {IsOpenUserMenu && (
            <ul className="z-10 absolute right-12 top-[70px] w-48 bg-white shadow-md rounded-md p-4">
              <Link  href={"/create"} onClick={() => setIsOpenUserMenu(false)}>
                <li className="border-b-2 border-zinc-500 p-3 hover:text-zinc-400">Create posts</li>
              </Link>
              <Link  href={"/userposts"} onClick={() => setIsOpenUserMenu(false)}>
                <li className="border-b-2 border-zinc-500 p-3 hover:text-zinc-400">My Post</li>
              </Link>
                <li className="border-b-2 border-zinc-500 p-3 cursor-pointer hover:text-zinc-400" onClick={()=>signOut()}>Sign Out</li>
            </ul>
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
