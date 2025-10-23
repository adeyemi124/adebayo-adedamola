import React, { useState } from "react";
import axios from "axios";


//*1 This component allows users to upload images to Cloudinary and display the uploaded image
const Cloudinary = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");


    //*2 Function to handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


    //*3 Function to upload image to Cloudinary
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "my_upload_preset"); // replace with yours

    try {
      const res = await axios.post(
         "https://api.cloudinary.com/v1_1/dw1gzsri4/image/upload", // replace YOUR_CLOUD_NAME
        formData
      );
      setUrl(res.data.secure_url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };



  return (
    <div className="p-4">
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage} className="bg-blue-600 text-white px-4 py-2 mt-2">
        Upload
      </button>

      {url && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={url} alt="Uploaded" className="max-w-xs" />
        </div>
      )}
    </div>
  );
};

export default Cloudinary;
