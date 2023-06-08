import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const UploadImg = () => {
  const [imageList, setImageList] = useState([]);
  const handleOnchange = (e) => {
    const fileImg = e.target.files[0];

    if (!fileImg) return;
    const imgref = ref(storage, `images/${fileImg.name}`);
    uploadBytes(imgref, fileImg).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("url", url);
        setImageList([...imageList, url]);
      });
    });
  };
  return (
    <div>
      <input type="file" onChange={handleOnchange} />
      {imageList &&
        imageList.map((img) => {
          return <img src={img} />;
        })}
      {/* {imageList && imageList.map((img) => <img src={img} />)} */}
    </div>
  );
};

export default UploadImg;
