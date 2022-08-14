import React from "react";

const Gallery = () => {
  const gridImages = [
    {
      url: "/images/img4.jpg",
      name: "image1",
    },
    {
      url: "/images/img5.jpg",
      name: "image2",
    },
    {
      url: "/images/img6.jpg",
      name: "image3",
    },
    {
      url: "/images/img7.jpg",
      name: "image4",
    },
    {
      url: "/images/img8.jpg",
      name: "image5",
    },
    {
      url: "/images/img9.jpg",
      name: "image6",
    },
  ];
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md">
            <div className="row no-gutters">
              {gridImages.map((image, k) => {
                <div className="col-sm-4" key={k}>
                  <img src={image.url} alt={image.name} />
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
