function ShimmerCard() {
  return (
    <div
      className="
        animate-pulse
        overflow-hidden
        rounded-2xl
        bg-white
        p-3
      "
    >
      <div
        className="
          h-45
          w-full
          rounded-2xl
          bg-gray-200
        "
      ></div>

      <div className="mt-4">
        <div
          className="
            h-5
            w-3/4
            rounded-md
            bg-gray-200
          "
        ></div>

        <div className="mt-3 flex items-center gap-3">
          <div
            className="
              h-4
              w-14
              rounded-md
              bg-gray-200
            "
          ></div>

          <div
            className="
              h-4
              w-16
              rounded-md
              bg-gray-200
            "
          ></div>
        </div>

        <div
          className="
            mt-3
            h-4
            w-full
            rounded-md
            bg-gray-200
          "
        ></div>

        <div
          className="
            mt-3
            h-4
            w-1/2
            rounded-md
            bg-gray-200
          "
        ></div>
      </div>
    </div>
  );
}

export default ShimmerCard;
