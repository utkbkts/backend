"use client";

import { blogData } from "@/constants/blogData";
import { PostTypes } from "@/types/postTypes";
import Overlay from "@/ui/Overlay";
import Tag from "@/ui/Tag";
import { formatDate } from "@/utils/Formatdate";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Toppost: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {
  const [selectedCategory, setSeclectedCategory] = useState("all");
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const filterPostsByCategory = () => {
    if (!posts) {
      return [];
    }

    if (selectedCategory === "topPost") {
      return posts.slice(0, visibleBlogs);
    } else {
      return posts
        .filter((post) => post.topPost === true)
        .slice(0, visibleBlogs);
    }
  };
  if (posts?.length <= 0) {
    return <h1 className=" text-3xl font-extrabold">Not yet Top Posts</h1>;
  }
  return (
    <section aria-labelledby="top-post">
      <div className="w-full text-center">
        <h2
          id="top-post"
          className="text-center text-2xl font-extrabold uppercase text-tertialy inline-block px-2 mb-10"
        >
         {!posts ? "Not yet Posts":" Top Post"}
        </h2>
      </div>
      <div className="flex h-full flex-col gap-12 items-center">
        {filterPostsByCategory()
          .slice(0, visibleBlogs)
          .map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article>
                <div className="relative cursor-pointer">
                  {post.img && (
                    <Image
                      src={post.img}
                      width={800}
                      height={800}
                      alt={"image"}
                    />
                  )}
                  <Overlay />
                </div>
                <div className="w-full flex justify-center">
                  <Tag text={post.category} />
                </div>
                <h3 className="uppercase text-center text-tertialy">
                  {post.title}
                </h3>
                <div className="flex gap-3 justify-center mt-2">
                  <span className="font-light">By:{post.user.name}</span>
                  <span className="italic font-light">
                    {formatDate(post.createdAt.toString())}
                  </span>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Toppost;
