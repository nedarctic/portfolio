import Image from "next/image";

import { AboutText } from "./components/abouttext";
import { CoverText } from "./components/covertext";
import { CallToAction } from "./components/calltoaction";
import { ThankYou } from "./components/thankyou";

import styles from './styles/ScrollAnimate.module.css';
import { bodoniModa } from "./ui/fonts";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center mt-5 space-y-10 sm:flex-row">
        <Image src="/coverimage.png" alt="Justus Kimtai cover image" width={380} height={346} className="p-4" />
        <CoverText />
      </div>
      <div className={`flex flex-col py-40 justify-center items-center ${styles.scrollanimate}`}>
        <CallToAction />
      </div>
      <div className={`flex flex-col justify-center items-center mt-5 space-y-10 lg:space-x-4 sm:flex-row h-screen`}>
        <AboutText />
        <Image src="/aboutimage.png" alt="Justus Kimtai about image" width={300} height={340} className={`p-4`} />
      </div>
      <div className="flex flex-col justify-center items-center py-5 space-y-10">
        <p className={`${bodoniModa.className} ${styles.scrollanimate} font-black italic text-2xl`}>Work</p>
        <p className={`${bodoniModa.className} ${styles.scrollanimate} font-black self-start italic px-4 text-4xl`}>GalleryX</p>
        <p className={`${bodoniModa.className} ${styles.scrollanimate} italic text-black text-sm px-4`}>A modern web application for artists, photographers, and creators to display their portfolios and collections in an elegant, user-friendly interface.</p>
        <Image src="/gallx.png" alt="Gallery X app demo" width={300} height={0} className={`${styles.scrollanimate}`} />
        <p className={`${bodoniModa.className} ${styles.scrollanimate} text-black italic text-2xl`}>More coming soon!</p>
      </div>
      <div className="flex flex-col justify-end items-center p-10">
        <ThankYou />
      </div>
    </div>
  );
}
