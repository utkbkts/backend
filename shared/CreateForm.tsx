"use client";
import { useEdgeStore } from "@/lib/edgestore";
import Form from "@/ui/Form";
import { SingleImageDropzone } from "@/ui/SingleImage";
import Input from "@/ui/input";
import React, { useEffect, useState } from "react";
import { UserTypes } from "@/types/userTypes";
import { PostTypes } from "@/types/postTypes";
import { createPost } from "@/actions/blogActions";
import Button from "@/ui/Button";
const CreateForm = ({ user }: { user: UserTypes }) => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [imagePath, setImagePath] = useState("");

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImagePath(res.url);
    }
  };
  useEffect(() => {
    if (file) {
      uploadImageHandler();
    }
  }, [file]);

  return (
    <div className="mt-8 mx-auto px-4 w-full max-w-3xl">
      <div className="bg-white py-8 shadow rounded-lg px-10">
        <h1 className="text-center text-2xl font-extrabold mb-10">
          Create a Post
        </h1>
        {!user ? (
          <h2 className="text-center text-xl font-extrabold uppercase">
            Please Sign up or Log in to create post!
          </h2>
        ) : (
          <>
            <SingleImageDropzone
              onChange={(file) => {
                setFile(file);
              }}
              value={file}
              width={200}
              height={200}
            />
            <Form
              action={createPost}
              className="flex flex-col gap-5 mt-5"
              onSubmit={() => setFile(undefined)}
            >
              <Input type="hidden" name="image" value={imagePath} />
              <Input type="text" name="title" placeholder="Enter Title" />
              <textarea
                className="text-gray-900 shadow-sm ring-inset ring-1 placeholder:text-gray-400 focus:right-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 outline-none"
                required
                name="description"
                rows={10}
                placeholder="Write Here..."
              ></textarea>
              <select
                className="text-gray-900 shadow-sm ring-inset ring-1 placeholder:text-gray-400 focus:right-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 outline-none"
                name="category"
              >
                <option value="" selected disabled>
                  Choose Category
                </option>
                <option value="WanderLust">WanderLust</option>
                <option value="Discovery">Discovery</option>
                <option value="Journey">Journey</option>
              </select>
              <span>
                <input
                  type="radio"
                  name="topPost"
                  id="topPostTrue"
                  value="true"
                />{" "}
                True
              </span>
              <span>
                <input
                  type="radio"
                  name="topPostfalse"
                  id="topPostFalse"
                  value="false"
                />{" "}
                False
              </span>
              <Input name="email" type="hidden" value={user?.email || ""} />
              <Button type="submit" text="Create Post"></Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
