import React, { useRef } from "react";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";

function Carousel({ items }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 400;

    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-[#282c3f]">
          What's on your mind?
        </h2>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          {/* Left */}
          <button
            onClick={() => scroll("left")}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-gray-200
              text-lg
              font-bold
              text-[#3d4152]
              transition
              hover:bg-gray-300
              active:scale-95
            "
          >
            ←
          </button>

          {/* Right */}
          <button
            onClick={() => scroll("right")}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-gray-200
              text-lg
              font-bold
              text-[#3d4152]
              transition
              hover:bg-gray-300
              active:scale-95
            "
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="
          flex
          gap-5
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              cursor-pointer
              transition
              duration-300
              hover:scale-105
            "
          >
            <img
              src={CLOUDINARY_IMAGES_LINK + item.imageId}
              alt="carousel-item"
              className="
                h-[180px]
                w-[150px]
                rounded-2xl
                object-cover
                md:h-[220px]
                md:w-[180px]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;