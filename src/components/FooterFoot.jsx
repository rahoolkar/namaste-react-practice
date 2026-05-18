function FooterFoot() {
  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Gurgaon",
    "Noida",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Lucknow",
    "Indore",
    "Nagpur",
    "Surat",
  ];
  
  return (
    <>
      <div className="mx-auto max-w-300 px-6 py-12">
        <h3 className="mb-6 text-xl font-bold text-black">Available in</h3>

        <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cities.map((city, index) => (
            <span
              key={index}
              className="cursor-pointer transition hover:text-[#fc8019]"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300"></div>

      <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
        <p className="text-lg font-semibold text-black">
          For better experience, download the Swiggy app now
        </p>

        <div className="flex items-center gap-4">
          <img
            className="h-14 cursor-pointer transition hover:scale-105"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />

          <img
            className="h-14 cursor-pointer transition hover:scale-105"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
        </div>
      </div>
    </>
  );
}

export default FooterFoot;
