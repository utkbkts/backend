"use client";

import Overlay from "@/ui/Overlay";
import Tag from "@/ui/Tag";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";

const BlogCard: React.FC<{ post: PostTypes }> = ({ post }) => {
  console.log(post);
  return (
    <article className="relative rounded-md overflow-hidden">
      <div className="w-[1000px] h-[450px] relative">
      {post.img && (
          <Image
            src={post.img}
            layout="fill"
            objectFit="cover"
            alt={`image for ${post.title}`}
            onError={(e) => console.error("Image failed to load", e)}
          />
        )}
        <Overlay />
      </div>
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
        <div>
          <Tag text={post.category} />
          <h3 className="text-3xl font-extrabold uppercase text-white">
            {post.title}
          </h3>
        </div>
      </div>
      <Link
        className="absolute right-0 bg-tertialy p-5 text-white rounded-tl-lg z-6 cursor-pointer bottom-0"
        href={`/blog/${post.id}`}
      >
        <ArrowRight />
      </Link>
    </article>
  );
};

export default BlogCard;
