import React from "react";
import { FaStar, FaSpotify } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const PasswordDetails = () => {
  return (
    <div className="min-h-[100vh] h-[100%] bg-[#0a0a0a] text-[#979797] py-12 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div>
            <FaSpotify color="#1ed760" size="40px" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">Spotify</h1>
            <div className="text-sm font-semibold">Alma Lawson</div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <FaStar color="white" />
          </div>
          <button className="border border-white rounded-sm text-xs text-white px-4 py-1">
            Edit
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-x-8">
          <button className="text-[#df5757] border-b-2 border-[#df5757] px-4 py-1">
            Details
          </button>
          <button>History</button>
        </div>
        <div className="text-sm font-semibold flex flex-col gap-y-4">
          <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#454444]">
            <div className="flex flex-col">
              <div>Username</div>
              <div className="text-[#d1cdcd]">almalawson</div>
            </div>
            <button>
              <MdContentCopy />
            </button>
          </div>
          <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#454444]">
            <div>
              <div>Password</div>
              <input
                type="password"
                defaultValue="almalawsonpassword"
                className="bg-[#000000] outline-none text-[#d1cdcd]"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <button>
                <IoEyeOutline />
              </button>
              <button>
                <MdContentCopy />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#454444]">
            <div>
              <div>Website</div>
              <a href="#" className="underline text-[#1da1f2]">
                https://www.spotify.com/
              </a>
            </div>
            <button>
              <MdContentCopy />
            </button>
          </div>
          <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#454444]">
            <div>
              <div>Website 2</div>
              <a href="#" className="underline text-[#1da1f2]">
                https://www.account.spotify.com/
              </a>
            </div>
            <button>
              <MdContentCopy />
            </button>
          </div>
          <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#454444]">
            <div>
              <div>Category</div>
              <div className="mt-2 bg-[#292929] px-3 py-1 rounded-md text-[#fbbc09] font-normal text-sm">
                Music
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-36 mt-4">
        <div className="relative">
          <div className="absolute flex items-center justify-center z-10 w-24 h-24 bg-[#de5b63] rounded-full"></div>
          <div className="absolute top-2 left-2 z-20 w-20 h-20 bg-[#000000] flex items-center justify-center rounded-full text-white">
            82%
          </div>
        </div>
        <div className="text-sm font-semibold flex flex-col gap-y-1">
          <div className="text-white">Password Score: 82%</div>
          <div className="text-xs">
            Password Strength: <span className="text-[#85c79c]">Good</span>
          </div>
          <div className="text-xs text-[#1da1f2]">Get new suggestion?</div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-y-4 text-sm font-semibold">
        <div>
          <div className="text-xs font-normal">Last modified</div>
          <div className="text-[#d1cdcd]">08/05/2020 12:32 PM</div>
        </div>
        <div>
          <div className="text-xs font-normal">Created</div>
          <div className="text-[#d1cdcd]">12/04/2020 08:22 PM</div>
        </div>
      </div>
    </div>
  );
};

export default PasswordDetails;
