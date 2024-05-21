import React, { useState } from "react";
import { useColorMode, useToast } from "@chakra-ui/react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { RiTranslate2 } from "react-icons/ri";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <nav className="py-4 bg-gradient-to-b from-purple-600 to-purple-900 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-96 "> {/* Adjust width to flex-grow for full width */}
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 px-4 rounded ${
                colorMode === "light" ? "bg-white" : "bg-gray-800"
              } text-sm focus:outline-none`}
            />
          </div>
          <div className="flex space-x-4 items-center">
            <button className="text-white bg-transparent border-none focus:outline-none">
              <RiTranslate2  className="h-6 w-6"/>
            </button>
            <button
              className="text-white bg-transparent border-none focus:outline-none mr-4"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <LuMoon className="h-6 w-6" />
              ) : (
                <MdOutlineWbSunny className="h-6 w-6" />
              )}
            </button>
            <button className="text-white bg-transparent border-none focus:outline-none">
              <HiOutlineSquaresPlus  className="h-6 w-6"/>
            </button>
            <button className="text-white bg-transparent border-none focus:outline-none">
              <IoMdNotifications  className="h-6 w-6"/>
            </button>
            <div className="relative inline-block text-left">
              <button
                className="text-white bg-transparent border-none focus:outline-none"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="https://cdn-icons-png.freepik.com/512/3884/3884891.png"
                  alt="avatar"
                  className="w-8 h-8 bg-slate-500 rounded-full ml-3"
                />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center">
                      <img src="https://cdn-icons-png.freepik.com/512/3884/3884891.png" alt="avatar" className="w-8 h-8 rounded-full mr-2" />
                      <div>
                        <h4 className="text-lg font-bold">Hemant koli</h4>
                        <p className="text-sm text-gray-400">MERN Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  <p className="border "></p>
                  <Link className="flex py-2 px-4 text-md text-gray-700 w-full">
                    <LuUser className="mx-2 my-auto"/>Profile
                  </Link>
                  <Link className="flex py-2 px-4 text-md text-gray-700 w-full">
                    <IoSettingsOutline className="mx-2 my-auto"/>Settings
                  </Link>
                  <p className="border "></p>
                  <Link className="flex py-2 px-4 text-md text-gray-700 w-full">
                    <FaQuestion className="mx-2 my-auto"/>FAQ
                  </Link>
                  <div className="flex justify-center">
                  <Link
                    className="block py-2 px-4 text-sm text-white bg-red-400 rounded-md w-60 text-center m-2"
                    onClick={handleLogout}
                  >
                    Logout  
                  </Link>
                </div>
                </div>  
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
