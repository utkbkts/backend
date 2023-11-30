"use client";
import Hero from "@/shared/Hero";
import LatestPost from "@/shared/LatestPost";
import Slider from "@/shared/Slider";
import Toppost from "@/shared/Toppost";
import React from "react";

const Home = () => {
  return (
    <section className="relative">
      <Slider/>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPost/>
        <Toppost/>
      </div>
    </section>
  );
};

export default Home;
