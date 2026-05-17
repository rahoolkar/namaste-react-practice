import { Link, useRouteError } from "react-router-dom";

function Error() {
  const errorDetails = useRouteError();

  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-[#fff]
        px-6
        text-center
      "
    >
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/Error.png"
        alt="Error"
        className="mb-8 w-[260px] md:w-[320px]"
      />

      <h1
        className="
          text-2xl
          font-extrabold
          text-[#282c3f]
          md:text-3xl
        "
      >
        Something went wrong
      </h1>

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-6
          text-[#686b78]
          md:text-base
        "
      >
        We’re having trouble loading this page right now. Please try again
        later.
      </p>

      <div
        className="
          mt-6
          rounded-lg
          bg-gray-100
          px-5
          py-3
          text-sm
          font-semibold
          text-[#535665]
        "
      >
        {errorDetails?.status || "500"} :{" "}
        {errorDetails?.statusText || "Internal Server Error"}
      </div>

      <Link to="/">
        <button
          className="
            mt-8
            rounded-lg
            bg-[#fc8019]
            px-8
            py-3
            text-sm
            font-bold
            text-white
            transition
            duration-300
            hover:bg-[#e46f12]
            hover:scale-105
            active:scale-95
          "
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default Error;