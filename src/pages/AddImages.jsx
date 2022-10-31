import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import { storage } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import Description from '../components/Description';

const AddImages = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const count = useRef(0);

  const imageListRef = ref(storage, 'images/');

  const handleUpload = (e) => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        alert('Image has been uploaded successfully!');
      });
    });
  };

  useEffect(() => {
    async function getImagesFromFirebase() {
      const response = await listAll(imageListRef);
      response.items.forEach(async function (item) {
        const url = await getDownloadURL(item);
        setImageList((prevState) => {
          console.log('Prev state: ', prevState);
          count.current += 1;
          console.log(count.current);
          return [...prevState, url];
        });
      });
    }

    getImagesFromFirebase();
  }, []);

  return (
    <section className="min-h-screen">
      <>
        <div className="my-8">
          <SubTitle subTitle="Add Image" />
          <Description desc="Upload an image and it’ll be displayed below:" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <input
            type="file"
            onChange={(event) => setImageUpload(event.target.files[0])}
          />
          <button
            className="mt-[16px] py-2 bg-[#000] font-semibold text-sm w-80 rounded-md"
            onClick={handleUpload}
          >
            Upload Image
          </button>
        </div>
        <div className="mt-8 mb-4">
          <SubTitle subTitle="Images List" />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {imageList
            ? imageList.map((image, index) => {
                return (
                  <img
                    className="my-4 border-1"
                    key={index}
                    src={image}
                    width="200"
                  />
                );
              })
            : 'No Images Uploaded'}
        </div>
      </>
    </section>
  );
};

export default AddImages;
