import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MongoDB_URI)
    console.log("DB Connected");
}