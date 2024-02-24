import React, { useState } from "react";

const FirstAdmin = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      <div className="text-[24px] font-[700] text-center">
        First component admin panel
      </div>
      <div className="flex mx-[auto]">
        <form>
          <div>
            <div className="mt-[20px]">
              <label>Title</label>
              <input type="text" className="border-2 rounded-md ml-[10px]" />
            </div>
            <div className="mt-[20px]">
              <label>Description</label>
              <input type="text" className="border-2 rounded-md ml-[10px]" />
            </div>
          </div>
          <div className="flex gap-[10px] pt-[20px]">
            <div className="border-2 p-[20px]">
              <div>Card 1</div>
              <div className="mb-[20px]">
                <label>Image</label>
                <input
                  type="file"
                  className="border-2 rounded-md ml-[10px]"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-[20px]">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected image preview"
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="mt-[20px]">
                <label>Title</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
              <div className="mt-[20px]">
                <label>Description</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
            </div>
            <div className="border-2 p-[20px]">
              <div>Card 1</div>
              <div className="mb-[20px]">
                <label>Image</label>
                <input
                  type="file"
                  className="border-2 rounded-md ml-[10px]"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-[20px]">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected image preview"
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="mt-[20px]">
                <label>Title</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
              <div className="mt-[20px]">
                <label>Description</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
            </div>
            <div className="border-2 p-[20px]">
              <div>Card 1</div>
              <div className="mb-[20px]">
                <label>Image</label>
                <input
                  type="file"
                  className="border-2 rounded-md ml-[10px]"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-[20px]">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected image preview"
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="mt-[20px]">
                <label>Title</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
              <div className="mt-[20px]">
                <label>Description</label>
                <input type="text" className="border-2 rounded-md ml-[10px]" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstAdmin;
