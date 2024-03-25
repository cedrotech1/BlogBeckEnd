import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadToCloud = async (file, res) => {
  try {
    let options = {
      folder: "KlabTasks",
      use_filename: true,
    };

    // Determine whether the file is an image or a video based on its MIME type
   
    if (file.mimetype.startsWith('image')) {
      options.resource_type = 'image';
    } else if (file.mimetype.startsWith('video')) {
      options.resource_type = 'video';
    } else {
      throw new Error('Invalid file type');
    }

    const uploadedFile = await cloudinary.uploader.upload(file.path, options);
    return uploadedFile;
  } catch (error) {
    return res.status(500).send(error);
  }
};
