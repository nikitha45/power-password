import React from "react";
import profilePhoto from ".././assets/images/profile_image.jpg";
import { BsShieldLockFill, BsFillShieldFill } from "react-icons/bs";
import {
  MdLockOutline,
  MdOutlineShoppingCart,
  MdOutlineShare,
  MdOutlineSettings,
} from "react-icons/md";
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { RiBankFill, RiInformationLine } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="min-h-[100vh] h-[100%] bg-[#191919] text-[#979797] py-12 px-10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center gap-x-2">
          <div>
            <BsShieldLockFill color="#ff8065" size="24px" />
          </div>
          <h1 className="text-white font-semibold text-xl">PowerPassword</h1>
        </div>
        <div className="flex items-center gap-x-4 mt-8 pb-4 border-b border-[#454444]">
          <div className="w-6 h-7 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src={profilePhoto}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="text-white">Alma Lawson</div>
            <div className="text-xs font-semibold">View Profile</div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm">
            <h2 className="text-sm mt-6 mb-4">VAULT</h2>
            <ul className="flex flex-col gap-y-4 list-none">
              <li className="flex items-center gap-x-2 bg-[#292929] p-3 rounded-md cursor-pointer">
                <div>
                  <BsFillShieldFill color="#ff8366" />
                </div>
                <div className="text-white">Passwords</div>
              </li>
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <MdLockOutline />
                </div>
                <div>Security Dashboard</div>
              </li>
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <FaRegFileAlt />
                </div>
                <div>Notes</div>
              </li>
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <FaRegUser />
                </div>
                <div>Personal Information</div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm mt-8 mb-4">CATEGORIES</h2>
            <ul className="flex flex-col gap-y-4 font-semibold text-sm list-none">
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <MdOutlineShoppingCart />
                </div>
                <div>Payments</div>
              </li>
              <li className="flex items-center gap-x-2  cursor-pointer">
                <div>
                  <RiBankFill />
                </div>
                <div>Bank Accounts</div>
              </li>
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <FaHouse />
                </div>
                <div>Addresses</div>
              </li>
              <li className="flex items-center gap-x-2 cursor-pointer">
                <div>
                  <MdOutlineShare />
                </div>
                <div>Social Media</div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-2 mt-6 font-semibold text-sm cursor-pointer">
            <div>
              <RiInformationLine />
            </div>
            <div>Information</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2 mt-6 font-semibold text-sm cursor-pointer">
        <div>
          <MdOutlineSettings />
        </div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
