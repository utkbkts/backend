"use client";

import { deletePost } from "@/actions/blogActions";
import React, { useState } from "react";
import { PostTypes } from "@/types/postTypes";
import Button from "@/ui/Button";
import Input from "@/ui/input";

const DeletePost: React.FC<{ post: PostTypes }> = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button
        aria="delete post"
        onClick={handleDelete}
        text="Delete"
        action
      ></Button>
      {showModal && (
        <>
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="w-screen h-screen bg-black/40 absolute"></div>
            <div className="bg-white w-[400px] h-[200px] rounded-md z-30 fixed">
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center h-full "
              >
                <div className="flex items-center justify-center gap-4  flex-col">
                  {" "}
                  <p className="font-bold text-xl">
                    Are you sure you want to delete this post ?
                  </p>
                  <div className="flex items-center justify-center gap-4 ">
                    <form
                      action={deletePost}
                      onSubmit={closeModal}
                      className="flex  items-center justify-center gap-4"
                    >
                      <Input type="hidden" name="postId" value={post.id} />
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      >
                        Yes
                      </button>
                    </form>
                    <button
                      type="submit"
                      onClick={closeModal}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DeletePost;
