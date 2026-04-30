// src/Admin/layout/AdminTopbar.jsx
import React from "react";

const AdminTopbar = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 right-0 z-40 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:w-[calc(100%-16rem)] lg:px-8">
      {/* Left Section */}
      <div className="flex flex-1 items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="text-gray-600 active:scale-95 lg:hidden"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Search */}
        <div className="hidden w-full max-w-xl items-center sm:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>

            <input
              type="text"
              placeholder="Search patients, doctors, records..."
              className="w-full rounded-lg border border-gray-200 bg-surface-container-lowest py-2 pl-10 pr-4 text-[14px] leading-5 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button className="relative text-gray-600 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-error"></span>
        </button>

        <div className="hidden h-8 w-px bg-gray-200 sm:block"></div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[14px] leading-5 font-semibold text-on-surface">
              Admin User
            </p>
            <p className="text-[12px] leading-4 font-medium text-on-surface-variant">
              System Administrator
            </p>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD44Z5dti2rZ9Lh87rk95qpu9RAmTu53InZ0CFwYNvXcr-2DNNuCC1rLYHYqaCtfSeHQplexQY_mvY8UzFsLTk1iJSi-9W8DRSerBdcxCunackyKB77Aw2JW3QgTr5EdLuLjuBWgmz4DuCq4rDIy9Ei91lUrfGa1Jq5w9TjF5AIeUrjssiTzmtK2PN_wfkhB1KGvflA2SSXaRFbWrn9w6dmAwiPGJJYyRpls8mC01C1A6BV-3IAU9PguB8TLBkK-FuDXQc9rR4kOrvE"
            alt="Admin profile"
            className="h-10 w-10 rounded-full border border-gray-200 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;