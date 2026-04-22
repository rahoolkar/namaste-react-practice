import React, { useRef } from "react";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";

function Carousel({ items }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper">
      {/* Left Button */}
      <button className="nav-btn left" onClick={() => scroll("left")}>
        ‹
      </button>

      {/* Images */}
      <div className="carousel-container" ref={containerRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={CLOUDINARY_IMAGES_LINK + item.imageId} alt="banner" />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button className="nav-btn right" onClick={() => scroll("right")}>
        ›
      </button>
    </div>
  );
}

export default Carousel;
