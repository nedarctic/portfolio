"use client";

import Link from "next/link";

import { Bodoni_Moda } from "next/font/google";
const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
});

export const CoverText = () => {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h1 className={`${bodoniModa.className} font-black text-black text-2xl lg:text-6xl`}>JUSTUS</h1>
            <h1 className={`${bodoniModa.className} font-black text-black text-2xl lg:text-6xl`}>KIMTAI</h1>
            <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic my-2 text-sm lg:text-lg md:text-md`}>Full-stack web/Android Developer</p>
            <div className="my-6">
                <Link
                    href="#portfolio"
                    className={`text-black border-black py-2 px-6 border-2 hover:text-gray-300 ${bodoniModa.className}`}
                >
                    View Portfolio
                </Link>
            </div>
        </div>
    );
}