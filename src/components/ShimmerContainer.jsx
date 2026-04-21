import ShimmerCard from "./ShimmerCard";

function ShimmerContainer() {
  return (
    <div className="shimmer-container">
      {new Array(12).fill("").map((_, index) => {
        return <ShimmerCard key={index}></ShimmerCard>;
      })}
    </div>
  );
}

export default ShimmerContainer;
