import { blogData } from "@/constants/blogData";
import Overlay from "@/ui/Overlay";
import Tag from "@/ui/Tag";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const featuredPost = blogData.filter((blog) => blog.featured === true);

  const topFeaturedPost = featuredPost.slice(0, 1);
  const bottomPost = featuredPost.slice(1, 4);
  return (
    <div className="w-[95%] mx-auto max-w-[1450px] z-1">
      {topFeaturedPost.map((post, id: any) => (
        <article
          key={id}
          className="flex flex-col gap-5 mb-5 text-center relative"
        >
          <Tag text={post.tags} />
          <h2 className="text-6xl font-extrabold uppercase text-tertialy">
            {post.title}
          </h2>
          <div className="flex items-center gap-3 font-light text-tertialy justify-center">
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <span>{post.authorName}</span>
            <span className="italic">{post.publishDate}</span>
          </div>
          <div className="overflow-hidden relative max-h-[600px] shadow-xl">
            <img
              src={post.image_path}
              alt={`image for ${post.title}`}
              className="object-cover w-full h-full"
            />
          </div>
        </article>
      ))}
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {bottomPost.map((post, id) => (
          <article className="flex items-center flex-col gap-3 text-center">
              <Link className="w-full" href={{ pathname: `blog/${post.id}`, query: { ...post } }}>

            <div className="relative overflow-hidden h-72 w-full shadow-xl">
                <img
                  src={post.image_path}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              <Overlay />
            </div>
            </Link>

            <Tag text={post.tags} />
            <h3 className="text-xl font-extrabold uppercase text-tertialy px-5">
              {post.title}
            </h3>
            <span className="text-zinc-400">{post.authorName}</span>
            <span className="italic">{post.publishDate}</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Hero;
