import Image from "next/image";

import { AboutText } from "./components/abouttext";
import { CoverText } from "./components/covertext";
import { CallToAction } from "./components/calltoaction";
import { ThankYou } from "./components/thankyou";
import { Work } from "./components/work";

import styles from './styles/ScrollAnimate.module.css';


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center space-y-10'>
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
      <Work/>
      </div>
      <div className="flex flex-col justify-end items-center p-10">
        <ThankYou />
      </div>
    </div>
  );
}
