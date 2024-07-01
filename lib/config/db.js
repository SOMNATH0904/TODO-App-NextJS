import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://somnath0904:9430767284@cluster0.x3qzz0y.mongodb.net/')
    console.log("DB Connected");
}