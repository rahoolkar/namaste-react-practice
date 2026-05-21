import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="min-h-screen bg-[#e9ecee]">
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-24
        text-center
      "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-65 md:w-[320px]"
        />

        <h2
          className="
          mt-8
          text-3xl
          font-extrabold
          text-[#282c3f]
        "
        >
          Your cart is empty
        </h2>

        <p
          className="
          mt-3
          text-sm
          text-[#686b78]
          md:text-base
        "
        >
          You can go to home page to view more restaurants
        </p>

        {/* CTA Button */}
        <Link to="/">
          <button
            className="
            mt-8
            bg-[#fc8019]
            px-10
            py-4
            text-sm
            font-extrabold
            uppercase
            tracking-wide
            text-white
            transition
            duration-300
            hover:bg-[#e46f12]
            hover:scale-105
            active:scale-95
          "
          >
            See Restaurants Near You
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
