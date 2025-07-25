"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Page, SiteConfigType } from "@cms/types";
import Link from "next/link";
import Logo from './Logo';

type NavigationProps = {
  pages: Page[];
  siteConfig: SiteConfigType[];
};

export function Navigation({ pages, siteConfig }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 w-full lg:w-1/5 ease-in duration-300 z-10 drop-shadow-xl">
      <div
        className={`container mx-auto flex justify-between items-center px-4 top-0 transition-colors duration-300 ${
          scrolled ? "text-pink-700" : "text-white"
        }`}
      >
        <nav role="navigation" aria-label="Main navigation" className="items-center z-50">
          <button
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="absolute z-20 right-6 top-6"
            onClick={toggle}
          >
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>

          <div
            className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-800 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="absolute top-0 left-0 p-4 w-48">
              <Logo siteConfig={siteConfig} />
            </div>
            <ul>
              {pages.map((page: Page) => (
                <li key={page._id || page.slug.current} className="my-5 text-md text-gray-300">
                  <Link
                    href={`/${page.slug.current}`}
                    className="hover:text-white hover:font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}