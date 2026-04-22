function CarouselShimmer() {
  return (
    <div className="carousel-shimmer-wrapper">
      {new Array(6).fill("").map((el, index) => (
        <div className="carousel-shimmer-item" key={index}></div>
      ))}
    </div>
  );
}

export default CarouselShimmer;
