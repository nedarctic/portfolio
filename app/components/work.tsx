import Image from "next/image";
import { spaceMono } from "../ui/fonts";
import Link from "next/link";
import styles from '../styles/ScrollAnimate.module.css';

const workData = [
    { path: "/tablet.png", alt: "Tablet view image for Cedro Adventures" },
    { path: "/desktop.png", alt: "Desktop view image for Cedro Adventures" },
    { path: "/mobile.png", alt: "Mobile view image for Cedro Adventures" },
];

export const Work = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 lg:px-20 md:px-10 sm:px-8 px-7 py-10'>
            <p className={`${spaceMono.className} ${styles.scrollanimate} font-black text-black italic px-4 text-6xl`}>Work</p>
            <p className={`${spaceMono.className} font-black text-black italic px-4 md:text-2xl text-xl lg:text-4xl`}>1. Travel Company Website (Fullstack)</p>
            <p className={`${spaceMono.className} text-black text-xl`}>View this work at <Link className="text-blue-500 italic underline text-xl" target="blank" href="https://cedroadventures.com">Cedro Adventures</Link></p>
            <div className="columns-1 sm:columns-2 lg:p-4 sm:p-2 md:p-3 p-1 gap-x-0">
                {workData.map((image, index) => (
                    <div key={index} className="mb-2 md:mb-4 break-inside-avoid">
                        <div className="flex justify-center items-center">
                            <Link className="text-blue-500 italic underline text-xl" target="blank" href="https://cedroadventures.com">
                                {/* Image */}
                                <Image
                                    src={image.path}
                                    alt={image.alt}
                                    width={200}
                                    height={0}
                                    className="w-auto rounded-lg shadow-2xl"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <p className={`${spaceMono.className} font-black text-black italic px-4 md:text-2xl text-xl lg:text-4xl`}>2. Professional Resume</p>
            <Image
                                    src="/resume.png"
                                    alt="resume"
                                    width={600}
                                    height={0}
                                    className="w-auto shadow-2xl"
                                />
            <p className={`${spaceMono.className} text-black font-normal italic my-2 p-4 text-sm lg:text-lg md:text-md`}>More coming soon!</p>
        </div>

    );
}