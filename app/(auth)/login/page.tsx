"use client";
import Button from "@/ui/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          return;
        }
        if (callback?.ok) {
          router.push("/");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <div className=" border-b border-b-gray-500 w-full text-center ">
        <h1 className="text-4xl font-semibold text-tertialy mb-2">Log In</h1>
      </div>
      <div className=" h-screen flex items-center justify-center flex-col">
        <form action="#" className="w-[400px] bg-white p-2 h-[350px]">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div>
            <Button text="Login" className="mt-2"></Button>
          </div>
          <div className="relative flex items-center justify-center">
            <span className="absolute left-0 top-1/2 w-[150px] h-[1px] border-black border"></span>
            <span className="text-center">Or</span>{" "}
            <span className="absolute right-0 top-1/2 w-[150px] h-[1px] border-black border"></span>
          </div>
          <div className="flex items-center justify-center w-full mt-4">
            <button
              onClick={() => socialAction("google")}
              className="bg-slate-100 py-2 px-6 flex items-center gap-2 rounded-md"
            >
              <FcGoogle className="text-4xl" />
              in with Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
