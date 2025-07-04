"use client";
import { spaceMono } from "@/app/ui/fonts";
import Link from "next/link";

export const CoverText = () => {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h1 className={`${spaceMono.className} font-black text-black text-2xl lg:text-6xl`}>JUSTUS</h1>
            <h1 className={`${spaceMono.className} font-black text-black text-2xl lg:text-6xl`}>KIMTAI</h1>
            <p className={`${spaceMono.className} text-black font-normal italic my-2 text-sm lg:text-lg md:text-md`}>Full-stack web/Android Developer</p>
            <div className="my-6">
                <Link
                    href="/cv"
                    className={`text-black border-black py-2 px-6 border-2 hover:text-gray-300 ${spaceMono.className}`}
                >
                    View Resume
                </Link>
            </div>
        </div>
    );
}