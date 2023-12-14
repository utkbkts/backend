"use server";
import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const userEmail = formData.get("email") as string;
  const image = formData.get("image") as string;
  const topPostValue = formData.get("topPost") as string;
  const topPost: boolean = topPostValue === "true";

  await prisma.blog.create({
    data: {
      image: image,
      title: title,
      description: description,
      category: category,
      userEmail: userEmail,
      topPost: topPost,
    },
  });
  revalidatePath("/create");
}

export async function deletePost(formData: FormData) {
  const id = formData.get("postId") as string;

  await prisma.blog.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/create");
}
