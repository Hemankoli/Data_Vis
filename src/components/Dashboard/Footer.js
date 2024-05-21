import React from "react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-purple-400 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <p className="text-sm text-white">
          &copy; 2024 Hemant Koli. All rights reserved.
        </p>
        <div className="flex items-center">
          <Link to="/privacy-policy" className="mx-2 text-sm text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="mx-2 text-sm text-white">
            Terms of Service
          </Link>
          <div className="mx-2">
            <RiFacebookBoxFill size={20} className="text-gray-900" />
          </div>
          <div className="mx-2">
            <RiTwitterFill size={20} className="text-gray-900" />
          </div>
          <div className="mx-2">
            <RiInstagramFill size={20} className="text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
