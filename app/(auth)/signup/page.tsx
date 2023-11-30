"use client";
import Button from "@/ui/Button";
import React, { useState,ChangeEvent,FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const Signup = () => {
  const [form, setForm] = useState(initialState);
  const { name, password, confirmpassword, email } = form;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmpassword){
      console.log("uyuşmuyor");
        return;
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <div className=" border-b border-b-gray-500 w-full text-center ">
        <h1 className="text-4xl font-semibold text-tertialy mb-2">Log In</h1>
      </div>
      <div className=" h-screen flex items-center justify-center flex-col">
        <form
          onSubmit={handleSubmit}
          action="#"
          className="w-[400px] bg-white p-2 h-[350px]"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleChange}
              className="border rounded-md outline-none border-black/30 py-1 px-2 "
            />
          </div>
          <div>
            <Button text="Sign up" className="mt-2"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
