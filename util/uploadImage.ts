import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "6506577639745ad87805",
        ID.unique(),
        file
    )

    console.log(fileUploaded)

    return fileUploaded
}

export default uploadImage;