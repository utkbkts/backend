"use client";
import Button from "@/ui/Button";
import Map from "@/ui/Map";
import Overlay from "@/ui/Overlay";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
interface FormState {
  name: string;
  email: string;
  Subject: string;
  Phone: string;
  Message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  Subject: "",
  Phone: "",
  Message: "",
};
const Contact = () => {
  const [Form, setForm] = useState<FormState>(initialState);
  const { name, Subject, email, Phone, Message } = Form;
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  

  return (
    <div>
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/contact.jpg"
          fill
          alt="contact image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          Contact Us
        </h1>
      </div>

      <div className="p-10 leading-8 text-lg mt-10 relative m-auto rouded-lg text-center">
        <h1 className="text-4xl font-extrabold w-full text-center uppercase text-primary mb-10">
          Let's Discuss
        </h1>

        <form className="flex flex-col w-full gap-5">
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              value={Subject}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="number"
              placeholder="Phone"
              value={Phone}
              name="Phone"
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <textarea
            name="Message"
            placeholder="Message"
            value={Message}
            onChange={handleChange}
            rows={8}
            className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
          />
          <div className="flex justify-center">
            <Button aria="submit contact form" text="Submit" type="submit" />
          </div>
        </form>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
