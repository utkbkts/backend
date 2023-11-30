import mongoose from "mongoose";

const ContactDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI ?? "");
      console.log("mongoDB connect");
    }
  } catch (error) {
    console.log(error);
  }
};

export default ContactDB;
