import React from "react";
import {
  FaStar,
  FaRegStar,
  FaAirbnb,
  FaSpotify,
  FaTwitter,
  FaFacebookF,
  FaGoogle,
  FaMicrosoft,
  FaPaypal,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { SiNetflix } from "react-icons/si";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

const AllPasswords = () => {
  return (
    <div className="min-h-[100vh] h-[100%] bg-[#121212] text-[#979797] py-12 px-6">
      <div className="flex items-center gap-x-2">
        <div className="bg-white flex items-center gap-x-2 w-[330px] pl-4 pr-3 py-1  text-gray-600 rounded-full placeholder:text-xs placeholder:font-semibold">
          <div>
            <FaMagnifyingGlass color="#919191" size={12} />
          </div>
          <input
            type="search"
            className="w-full outline-none placeholder:text-xs placeholder:font-semibold"
            placeholder="Search Passwords"
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#ff8065] via-[#ff8065] to-yellow-200  text-white rounded-full">
          <div>
            <FaPlus size={14} />
          </div>
        </button>
      </div>
      <div className="flex items-center justify-between mt-6">
        <h1 className="font-bold text-xl text-white">All Passwords</h1>
        <div className="flex items-center gap-x-2 text-xs">
          <div>Sort By:</div>
          <div className="flex items-center gap-x-1">
            <div className="text-white">Name</div>
            <button>
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm mt-6 mb-2">FAVORITES</h2>
        <div className="flex flex-col gap-y-2 font-semibold text-sm">
          <div className="flex items-center justify-between bg-[#000000] rounded-md p-4">
            <div className="flex items-center gap-x-4">
              <div>
                <FaSpotify color="#1ed760" size="28px" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Spotify</h2>
                <div>alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-[#000000] p-2 rounded-full">
                <SiNetflix color="#e30913" size="24px" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Netflix</h2>
                <div>alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-[#1da1f2] p-2 rounded-full">
                <FaTwitter color="white" size="18px" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Twitter</h2>
                <div>alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaStar color="white" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm mt-4 mb-2">SORTED BY NAME</h2>
        <div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaAirbnb color="#e3676b" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Airbnb</h2>
                <div className="underline text-[#bab7b7]">
                  alma.lawson@gmail.com
                </div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaFacebookF color="#4591f5" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Facebook</h2>
                <div className="text-[#bab7b7]">alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaGoogle color="#eb4335" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Google</h2>
                <div className="text-[#bab7b7]">alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaMicrosoft color="#fbbc09" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">
                  Microsoft
                </h2>
                <div className="text-[#bab7b7]">alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaPaypal color="#4591f5" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Paypal</h2>
                <div className="text-[#bab7b7]">alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-white p-2 rounded-full">
                <FaLinkedinIn color="#0a66c2" size={20} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">Linkedin</h2>
                <div className="text-[#bab7b7]">alma.lawson@gmail.com</div>
              </div>
            </div>
            <button>
              <FaRegStar color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPasswords;
