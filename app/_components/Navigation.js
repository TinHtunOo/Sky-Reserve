"use client";

import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flights", href: "/flights" },
];

function Navigation({ user }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-white/50 backdrop-blur border-b border-stroke-faint shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-20 items-center text-default text-fg  tracking-wide ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" px-5 py-7 inline-block hover:bg-white/15 hover:underline transition duration-500 tracking-wider underline-offset-4 decoration-2 font-semibold "
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/signup"
              className=" px-4 py-2 border-fg border-2 rounded-md hover:bg-brand hover:text-white font-semibold"
            >
              Sign Up
            </Link>
          ) : (
            <Link
              href="/account"
              className="flex gap-1 px-5 py-5 items-center hover:bg-white/15 hover:underline transition duration-500 tracking-wider underline-offset-4 decoration-2 font-semibold "
            >
              {" "}
              <span className="w-8 h-8  rounded-[50%] bg-brand-dark flex items-center justify-center">
                <User width={20} color="#ffffff" />
              </span>
              Profile
            </Link>
          )}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-fg"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden uppercase px-4 pb-4 pt-2 space-y-2 border-t border-stroke-faint text-fg font-semibold shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 hover:bg-fg hover:text-bg   "
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/signup"
              className="block py-2  hover:bg-fg hover:text-bg   "
            >
              Sign Up
            </Link>
          ) : (
            <Link
              href="/account"
              className="py-2 items-center hover:bg-fg hover:text-bg "
            >
              Profile
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Navigation;
