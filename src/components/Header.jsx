import React from 'react';

const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-gray-100 px-4 text-sm py-2 border-b">
        <div>
          <span className="mr-4">ENGLISH ▼</span>
          <span>USD ▼</span>
        </div>
        <div className="space-x-4">
          <a href="#">MY ACCOUNT</a>
          <a href="#">WISHLIST</a>
          <a href="#">CHECKOUT</a>
          <a href="#">LOGIN</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-800 text-white flex justify-between items-center px-10 py-4">
        <div className="text-2xl font-bold">EREN</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">3</span>
            <svg width="24" height="24" fill="currentColor" className="text-white">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
              <path d="M6 8h12l-1.5 9h-9L6 8z" />
            </svg>
          </div>
          <svg width="24" height="24" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
