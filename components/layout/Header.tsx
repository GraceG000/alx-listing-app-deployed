// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">ALX Listings</h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-3">
            <a className="text-sm hover:underline">Rooms</a>
            <a className="text-sm hover:underline">Mansions</a>
            <a className="text-sm hover:underline">Countryside</a>
            <a className="text-sm hover:underline">Beachfront</a>
          </nav>

          <div className="relative">
            <input
              type="text"
              placeholder="Search location, property..."
              className="border rounded-md py-2 px-3 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="text-sm px-3 py-2 border rounded-md">Sign in</button>
            <button className="text-sm px-3 py-2 bg-blue-600 text-white rounded-md">Sign up</button>
          </div>
        </div>

        <div className="md:hidden">
          <button aria-label="open menu" className="p-2 border rounded-md">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
