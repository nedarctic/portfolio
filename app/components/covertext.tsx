"use client";
import { spaceMono } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const CoverText = () => {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h1 className={`${spaceMono.className} font-black text-white text-2xl lg:text-6xl`}>JUSTUS</h1>
            <h1 className={`${spaceMono.className} font-black text-white text-2xl lg:text-6xl`}>KIMTAI</h1>
            <p className={`${spaceMono.className} text-white font-normal italic my-2 text-sm lg:text-lg md:text-md text-center`}>Full-stack web/Android Developer</p>
            <div className="my-6">
                <Link
                    href="/cv"
                    className={`text-black bg-white rounded-md py-2 px-6 border-2 hover:text-gray-300 ${spaceMono.className}`}
                >
                    View Resume
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href="https://wa.me/+254797517270" target='_blank' rel='noopener noreferrer' className="block">
                    <FaWhatsapp size={32} className="text-white"/>
                </Link>
                <Link href="mailto:justkimtai@gmail.com" target="_blank" rel="noopener noreferrer" className='block'>
                    <SiGmail size={32} className="text-white"/>
                </Link>
                <Link href="https://facebook.com/justkimtai" target="_blank" rel="noopener noreferrer" className='block'>
                    <FaFacebookF size={32} className="text-white"/>
                </Link>
                <Link href="https://twitter.com/justkimtai" target="_blank" rel="noopener noreferrer" className='block'>
                    <FaXTwitter size={32} className="text-white"/>
                </Link>
            </div>
        </div>
    );
}