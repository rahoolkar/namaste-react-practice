import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function FooterHead() {
  return (
    <>
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#fc8019]">Swiggy</h1>

          <p className="mt-4 text-sm text-gray-500">© 2026 Swiggy Limited</p>

          <div className="mt-6 flex items-center gap-4 text-2xl text-gray-600">
            <FaFacebook className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaInstagram className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaTwitter className="cursor-pointer transition hover:text-[#fc8019]" />

            <FaLinkedin className="cursor-pointer transition hover:text-[#fc8019]" />
          </div>
        </div>

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
    </>
  );
}

export default FooterHead;
