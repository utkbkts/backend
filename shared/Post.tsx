"use client";
import { blogData } from "@/constants/blogData";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "@/ui/Button";
const Posts = () => {
    const [visibleBlog,setVisibleBlog]=useState(5);

    const showMoreBlogs = () => {
        setVisibleBlog((prevVisible)=>prevVisible + 3)
    }
  return (
    <section className="col-span-2">
      <div className="w-full text-center">
        <h2
          id="latestPost"
          className="text-center text-2xl font-extrabold uppercase text-tertialy inline-block px-2 mb-10"
        >
          Latest Post
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {blogData.slice(0,visibleBlog).map((post,id)=>(
            <BlogCard post={post} key={id}/>
        ))}
        {visibleBlog < blogData.length && (<div className="flex justify-center"><Button onClick={showMoreBlogs} aria="show More Blog Post" text="Show More Blog"></Button></div>)}
      </div>
    </section>
  );
};

export default Posts;
