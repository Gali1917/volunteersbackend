import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: "dd8a6qc45",
    api_key: "854217528997681",
    api_secret: "a-RhyeH-zlOQVGfqYCj4xaHyG6E"
})

export const uploadImage = async filePath =>{
    return await cloudinary.v2.uploader.upload(filePath, {
        folder: 'Volunteers'
    });
}

export const deleteImage = async id =>{
    return await cloudinary.v2.uploader.destroy(id);
}
