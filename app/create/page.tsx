import getCurrentUser from "@/actions/getCurrentUser";
import CreateForm from "@/shared/CreateForm";
import React from "react";

const Create = async () => {
  const user = await getCurrentUser();
  return <CreateForm user={user as any}/>;
};

export default Create;
