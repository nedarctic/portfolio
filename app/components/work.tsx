import Image from "next/image";
import { bodoniModa } from "../ui/fonts";
import Link from "next/link";
// import styles from '../styles/ScrollAnimate.module.css';

const workData = [
    { path: "/tablet.png", alt: "Tablet view image for Cedro Adventures" },
    { path: "/desktop.png", alt: "Desktop view image for Cedro Adventures" },
    { path: "/mobile.png", alt: "Mobile view image for Cedro Adventures" },
];

export const Work = () => {
    return (
        <div className="bg-cover bg-center w-full h-full flex flex-col justify-center items-center space-y-10 px-1 my-auto py-16 bg-white">
            <p className={`${bodoniModa.className} font-bold md:text-2xl sm:text-lg text-xl lg:text-6xl self-center text-black`}>Work</p>
            <p className={`${bodoniModa.className}`}><Link className="text-blue-500 italic underline text-xl" target="blank" href="https://cedroadventures.com">Cedro Adventures</Link></p>
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
        </div>

    );
}