import Tag from "@/ui/Tag";
import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

interface searchParamsTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}

const Search = ({ searchParams }: { searchParams: searchParamsTypes }) => {
  const post = searchParams;
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image"
          src={post.image_path}
          className="object-cover"
        />
      </div>
      <Tag text={post.tags} />
      <h2 className="text-4xl text-tertialy my-3 uppercase font-extrabold">
        {post.title}
      </h2>
      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-2/4 md:h-screen">
          <span className="uppercase text-2xl font-extrabold text-tertialy">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-800 mt-2">
            <Facebook />
            <Twitter />
            <Github />
          </div>
        </aside>
        <article>
          <p className="text-xl">
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={post.authorImage}
              alt="image"
              width={20}
              height={20}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span>{post.authorName}</span>
              <span className="italic text-tertialy">{post.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Search;
