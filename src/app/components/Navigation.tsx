"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Page, SiteConfig } from "@sanity/types/sanity-schema";
import Link from "next/link";
import Logo from './Logo';

type NavigationProps = {
  pages: Page[];
  siteConfig: SiteConfig[];
};

export function Navigation({ pages, siteConfig }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 right-0 w-full lg:w-1/5 ease-in duration-300 z-10 drop-shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-4 top-0 text-white">
        <nav className="items-center z-50">
          <button className="absolute z-20 right-6 top-6" onClick={toggle}>
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>

          <div
            className={`absolute top-0 ${
              isOpen ? "left-0" : "left-full"
            } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-800 ease-in duration-300`}
          >
            <div className="absolute top-0 left-0 p-4 w-48">
                <Logo siteConfig={siteConfig} />
            </div>
            <ul>
              {pages.map((page: Page) => (
                <li key={page._id} className="my-5 text-md text-gray-300">
                    <Link href={page.slug.current} className=" hover:text-white hover:font-bold">{page.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}