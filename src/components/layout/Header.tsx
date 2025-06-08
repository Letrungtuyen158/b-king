"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ship, Menu, X } from "lucide-react";
import Link from "next/link";
import IconChevron from "@/components/icon/IconChevron";
import IconClock from "@/components/icon/IconClock";
import IconLocation from "@/components/icon/IconLocation";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navigationItems = [
    { name: "Daily Departure", href: "#daily-departure" },
    { name: "Cruise Category", href: "#cruise-category" },
    { name: "Best Seller 2025", href: "#best-seller" },
    { name: "Cruise Packages", href: "#cruise-packages" },
    { name: "Think To Do", href: "#activities" },
    { name: "Customize Trip", href: "#customize" },
    { name: "Why Us", href: "#why-us" },
    // { name: "Contact Us", href: "#contact" },
  ];

  // Set mặc định là item đầu tiên
  const [activeItem, setActiveItem] = useState<string>(navigationItems[0].href);

  // Smooth scroll function
  const scrollTo = (elementId: string) => {
    setActiveItem(""); // Reset trước
    setTimeout(() => {
      setActiveItem(elementId);
      console.log("Active item set to:", elementId); // Debug
    }, 10);
    setIsMenuOpen(false);
    const id = elementId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 ${className}`}
    >
      {/* Sub Header */}
      <div className='lg:px-24 px-8 md:px-12 py-2 text-[10px] text-stone-950 w-full bg-stone-50 flex justify-between items-center'>
        <div className='flex items-center divide-x divide-neutral-400 *:px-5'>
          <div className='flex items-center gap-1.5'>
            <IconLocation />
            <div className=''>
              72 Hang Trong St., Hoan Kiem Dist., Hanoi, Vietnam 2000
            </div>
          </div>
          <div className='flex items-center gap-1.5'>
            <IconClock />
            <div className=''>Hotline: +84-946 505 505</div>
          </div>
        </div>
        <div className='md:flex items-center hidden gap-2.5'>
          <div className='inline-flex px-5 py-2 rounded-full items-center border border-zinc-200 gap-1'>
            <div className=''>Language</div>
            <IconChevron />
          </div>
          <div className='flex items-center divide-x divide-neutral-400 *:px-3'>
            <div className='#'>FAQ</div>
            <div className='#'>Support</div>
            <div className='#'>Sign in/ Register</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='px-4 space-x-4 md:px-8 py-4 md:py-6'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-12 h-12 aspect-square bg-blue-600 rounded-full flex items-center justify-center'>
              <Ship className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-lg md:text-xl font-bold text-gray-900'>
                Halong Bay Tours
              </h1>
              <p className='text-xs text-gray-500'>Asia Pacific Travel</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center'>
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`text-neutral-600 hover:text-blue-800 transition-colors px-3 capitalize text-sm min-w-20 ${
                  activeItem === item.href ? "!text-blue-800 font-bold" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className='flex items-center gap-2 md:gap-4'>
            <Link href={"#booking-tour"}>
              <button className='bg-blue-800 text-white px-3 md:px-5 py-2 text-xs capitalize rounded hover:bg-blue-700 transition-colors'>
                Book A Tour
              </button>
            </Link>
            <button
              className='lg:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden mt-4 py-4 border-t border-gray-100'
          >
            <nav className='flex flex-col space-y-4'>
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm md:text-base ${
                    activeItem === item.href ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
