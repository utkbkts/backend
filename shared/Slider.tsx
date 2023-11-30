import { blogData } from "@/constants/blogData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Slider = () => {
  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(blogData.length / itemsPerPage);
  const start = currentIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = blogData.slice(start, end);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(totalSlides - 1, prevIndex + 1));
  };

  return (
    <div className="flex items-center gap-4 p-2 relative">
      {currentData.map((post, id) => (
        <div
          key={id}
          className="w-full h-full transition-transform ease-in-out duration-500"
        >
          <img src={post.image_path} alt="" className="w-[500px] h-[200px]" />
          <div className="flex items-center gap-2 ">
            <span className="md:text-xl text-sm">{post.authorName}</span>
            <span>{post.publishDate}</span>
          </div>
        </div>
      ))}
      <div>
        <span
          className={`absolute left-0 bg-zinc-300 hover:w-[50px] hover:bg-red-400 transition-all duration-500 ${
            currentIndex === 0 ? "opacity-75" : null
          }`}
          onClick={handlePrev}
        >
          <button
            className={`flex items-center justify-center`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={40} />
          </button>
        </span>
        <span
          className={`absolute right-0 bg-zinc-300 hover:w-[50px] hover:bg-red-400 transition-all duration-500 ${
            currentIndex === totalSlides - 1 ? "opacity-50" : null
          }`}
          onClick={handleNext}
        >
          <button
            className="flex items-center justify-center"
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
          >
            <ChevronRight size={40} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Slider;
