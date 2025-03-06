"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { spaceMono } from "@/app/ui/fonts";

export const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (!isMenuOpen) return

        const handleClickOutside = () => {
            closeMenu();
        };

        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="sticky top-0 left-0 right-0 bg-white px-2 z-10">
                <nav className="bg-white text-black">
                    <div className={`${spaceMono.className} font-medium flex justify-between items-center h-24`}>
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                width={40}
                                height={20}
                                alt="The Justus Kimtai logo"
                                className="ml-4"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-6">
                            <li>
                                <Link href="/" className={pathname === "/" ? "underline font-bold" : "hover:text-gray-300"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" className={pathname === "/skills" ? "underline" : "hover:text-gray-300"}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="/work" className={pathname === "/work" ? "underline" : "hover:text-gray-300"}>
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-black border-black p-4 border-2 hover:text-gray-300">
                                    Get in touch!
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Navigation Button */}
                        <button
                            onClick={toggleMenu} // Hamburger button click will trigger the menu toggle
                            className="md:hidden mr-4 text-black hover:text-lg focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Modal */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
                    id="modal"
                >
                    <div className="bg-white rounded-lg shadow-lg w-4/5 max-w-sm">
                        <ul className="flex flex-col space-y-2 p-3">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/skills", label: "Skills" },
                                { href: "/work", label: "Work" },
                                { href: "/contact", label: "Get in touch!" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={`${spaceMono.className} block text-black w-full p-2 rounded-md ${pathname === item.href ? "bg-custom-peach text-black font-bold" : "hover:bg-gray-200"}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
