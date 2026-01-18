// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-semibold mb-2">ALX Listings</h4>
            <p>Find your favorite place — over 2 million properties worldwide.</p>
          </div>

          <div className="mt-4 md:mt-0">
            <p>© {new Date().getFullYear()} ALX Listings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
