import Image from "next/image";
import { spaceMono } from "../ui/fonts";
import Link from "next/link";
import styles from '../styles/ScrollAnimate.module.css';

const workData = [
    { path: "/tablet.png", alt: "Tablet view image for Cedro Adventures" },
    { path: "/desktop.png", alt: "Desktop view image for Cedro Adventures" },
    { path: "/mobile.png", alt: "Mobile view image for Cedro Adventures" },
];

const resumeData = [
    { path: "/resume.png", alt: "resume one" },
    { path: "/jamesmwangicv.png", alt: "resume two" },
    { path: "/kevinotienocv.png", alt: "resume three" }
];

export const Work = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 lg:px-20 md:px-10 sm:px-8 px-5 py-10'>
            <p className={`${spaceMono.className} ${styles.scrollanimate} font-black text-black italic px-4 text-6xl`}>Work</p>
            <p className={`${spaceMono.className} font-black text-black italic px-4 md:text-2xl text-xl lg:text-4xl`}>1. Travel Company Website (Fullstack)</p>
            <p className={`${spaceMono.className} text-black text-xl`}>View this work at <Link className="text-blue-500 italic underline text-xl" target="blank" href="https://cedroadventures.com">Cedro Adventures</Link></p>
            <div className="columns-1 sm:columns-2 lg:p-4 sm:p-2 md:p-3 gap-2">
                {workData.map((image, index) => (
                    <div key={index} className="mb-2 break-inside-avoid">
                        <div className="flex flex-col items-center">
                            <Link target="blank" href="https://cedroadventures.com">
                                {/* Image */}
                                <Image
                                    src={image.path}
                                    alt={image.alt}
                                    width={300}
                                    height={0}
                                    className="h-auto rounded-lg shadow-2xl"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <p className={`${spaceMono.className} font-black text-black italic px-6 md:text-2xl text-xl lg:text-4xl`}>2. Professional Resume</p>
            <div className="columns-1 sm:columns-2 lg:p-4 sm:p-2 md:p-3 gap-4">
                {resumeData.map((item, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <div className="flex flex-col items-center">
                            <Image
                                src={item.path}
                                alt="resume"
                                width={300}
                                height={0}
                                className="h-auto rounded-lg border-gray-500 border-2 shadow-2xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <p className={`${spaceMono.className} text-black font-normal italic my-2 p-4 text-sm lg:text-lg md:text-md`}>More coming soon!</p>
        </div>

    );
}