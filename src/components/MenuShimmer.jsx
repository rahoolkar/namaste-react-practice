import MenuShimmerCard from "./MenuShimmerCard";

function MenuShimmer() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] pb-16">
      {/* Main Container */}
      <div className="mx-auto max-w-[850px] px-4 py-8">
        {/* Restaurant Header Shimmer */}
        <div
          className="
            animate-pulse
            rounded-3xl
            bg-white
            p-6
            shadow-sm
          "
        >
          {/* Restaurant Name */}
          <div className="h-8 w-1/2 rounded-md bg-gray-200"></div>

          {/* Cuisine */}
          <div className="mt-4 h-4 w-1/3 rounded-md bg-gray-200"></div>

          {/* Rating Box */}
          <div className="mt-6 rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>

              <div className="h-4 w-16 rounded-md bg-gray-200"></div>

              <div className="h-4 w-24 rounded-md bg-gray-200"></div>
            </div>

            <div className="mt-4 h-4 w-40 rounded-md bg-gray-200"></div>
          </div>
        </div>

        {/* Menu Heading */}
        <div className="my-10 flex flex-col items-center">
          <div className="h-6 w-32 rounded-md bg-gray-200"></div>

          <div className="mt-3 h-4 w-56 rounded-md bg-gray-200"></div>
        </div>

        {/* Menu Item Shimmers */}
        <div className="space-y-6">
          {new Array(3).fill("").map((_, index) => {
            return <MenuShimmerCard key={index}></MenuShimmerCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuShimmer;
