import Overlay from "@/ui/Overlay";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image src={"/assets/abıyt.jpg"} fill alt="about" className="object-cover" />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About Us
        </h1>
      </div>
      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none text-zinc-600"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusamus repellendus eos corrupti dignissimos unde similique praesentium harum, eligendi dolores quis architecto molestiae dolorum quia eum. Nobis debitis explicabo alias ullam nostrum voluptas officia aspernatur impedit, illo expedita recusandae, perspiciatis nesciunt fuga ex temporibus architecto? Beatae a illum ex ducimus.</p></div>
    </div>
  );
};

export default About;
