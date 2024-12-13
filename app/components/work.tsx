import Image from "next/image";
import { bodoniModa } from "../ui/fonts";
import styles from '../styles/ScrollAnimate.module.css';
import { ThankYou } from "./thankyou";

import Link from "next/link";

export const Work = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5 space-y-10">
        <p className={`${bodoniModa.className} ${styles.scrollanimate} font-black italic px-4 text-6xl`}>Work</p>
            <p className={`${bodoniModa.className} ${styles.scrollanimate} font-black italic px-4 text-4xl`}>GalleryX</p>
            <p className={`${bodoniModa.className} ${styles.scrollanimate} italic text-black text-sm px-4`}>A modern web application for artists, photographers, and creators to display their portfolios and collections in an elegant, user-friendly interface.</p>
            <Link href="https://galleryx.onrender.com">
                <Image src="/gallx.png" alt="Gallery X app demo" width={300} height={0} className={`${styles.scrollanimate} px-4`} />
            </Link>
            <p className={`${bodoniModa.className} ${styles.scrollanimate} text-black italic text-2xl`}>More coming soon!</p>
            <div className="flex flex-col justify-end items-center p-10">
                <ThankYou />
            </div>
        </div>
    );
}