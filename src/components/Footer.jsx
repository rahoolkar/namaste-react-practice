import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
    <footer className="mt-16 bg-[#f0f0f5] text-[#3d4152]">
      {/* Top Section */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold text-[#fc8019]">Swiggy</h1>

          <p className="mt-4 text-sm text-gray-500">© 2026 Swiggy Limited</p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4 text-2xl text-gray-600">
            <FaFacebook className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaInstagram className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaTwitter className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaLinkedin className="cursor-pointer transition hover:text-[#fc8019]" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-black">Company</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-[#fc8019]">About us</li>

            <li className="cursor-pointer hover:text-[#fc8019]">
              Swiggy Corporate
            </li>

            <li className="cursor-pointer hover:text-[#fc8019]">Careers</li>

            <li className="cursor-pointer hover:text-[#fc8019]">Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-black">Contact</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-[#fc8019]">
              Help & Support
            </li>

            <li className="cursor-pointer hover:text-[#fc8019]">
              Partner with us
            </li>

            <li className="cursor-pointer hover:text-[#fc8019]">
              Ride with us
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-black">Legal</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-[#fc8019]">
              Terms & Conditions
            </li>

            <li className="cursor-pointer hover:text-[#fc8019]">
              Cookie Policy
            </li>

            <li className="cursor-pointer hover:text-[#fc8019]">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Cities Section */}
      <div className="mx-auto max-w-[1200px] px-6 py-12">
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

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom CTA */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
        <p className="text-lg font-semibold text-black">
          For better experience, download the Swiggy app now
        </p>

        {/* App Buttons */}
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
    </footer>
  );
};

export default Footer;
