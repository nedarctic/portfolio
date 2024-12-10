"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { bodoniModa } from '../ui/fonts';

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className="sticky top-0">
            <nav className="bg-white text-black">
                <div className={`${bodoniModa.className} font-medium flex justify-between items-center h-24`}>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={40}
                            height={20}
                            alt="The Justus Kimtai logo"
                        /></Link>

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
                            <Link href="/services" className={pathname === "/services" ? "underline" : "hover:text-gray-300"}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className={pathname === "/work" ? "underline" : "hover:text-gray-300"}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-black border-black p-4 border-2 hover:text-gray-300"
                            >
                                Get in touch!
                            </Link>
                        </li>
                    </ul>
                    <button className="md:hidden text-black hover:text-lg focus:outline-none">
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
    );
};
