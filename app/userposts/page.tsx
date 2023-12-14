import getCurrentUser from "@/actions/getCurrentUser";
import BlogCard from "@/shared/BlogCard";
import DeletePost from "@/shared/DeletePost";
import React from "react";
const UserPosts = async () => {
  const user = await getCurrentUser();
  const posts = await prisma?.blog.findMany({
    where: {
      userEmail: user?.email ?? undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="w-full">
      {user ? (
        <div className="max-w-[90%] mx-auto">
          <div className="w-full text-center mb-12">
            <h1 className="text-3xl font-extrabold text-tertialy">
              Hello, {user?.name}
            </h1>
            <span className="text-lg">You have published {posts?.length}</span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
            {posts?.map((post) => (
              <div className="relative">
                <BlogCard post={post as any} />
                <DeletePost post={post as any} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-3xl font-extrabold text-center h-screen flex items-center justify-center">Sign in to view your post</h1>
      )}
    </div>
  );
};

export default UserPosts;
