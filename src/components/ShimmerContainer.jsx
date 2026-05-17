import ShimmerCard from "./ShimmerCard";

function ShimmerContainer() {
  return (
    <div
      className="
        mx-auto
        grid
        max-w-[1200px]
        grid-cols-1
        gap-6
        px-4
        py-8
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
}

export default ShimmerContainer;