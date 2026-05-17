function MenuShimmerCard() {
  return (
    <div
      className="
      animate-pulse
      rounded-2xl
      bg-white
      p-5
      shadow-sm
    "
    >
      <div
        className="
        flex
        flex-col
        gap-5
        md:flex-row
        md:items-center
        md:justify-between
      "
      >
        {/* Left Content */}
        <div className="flex-1">
          <div className="h-5 w-1/2 rounded-md bg-gray-200"></div>

          <div className="mt-4 h-4 w-20 rounded-md bg-gray-200"></div>

          <div className="mt-4 h-4 w-full rounded-md bg-gray-200"></div>

          <div className="mt-2 h-4 w-4/5 rounded-md bg-gray-200"></div>
        </div>

        {/* Image */}
        <div
          className="
          h-[160px]
          w-full
          rounded-2xl
          bg-gray-200
          md:w-[180px]
        "
        ></div>
      </div>
    </div>
  );
}

export default MenuShimmerCard;
