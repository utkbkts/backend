import Tag from "@/ui/Tag";
import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/Formatdate";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Search = async ({ params }: { params: PostTypes }) => {
  const { id } = params;
  const post = await getData(id);
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image"
          src={post.img}
          className="object-cover"
        />
      </div>
      <Tag text={post.category} />
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
            {post.description}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={post.user.image}
              alt="image"
              width={20}
              height={20}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span>{post.user.name}</span>
              <span className="italic text-tertialy">{formatDate(post.createdAt.toString())}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Search;
