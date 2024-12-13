import Image from "next/image"
import styles from '../styles/ScrollAnimate.module.css';
import { bodoniModa } from "../ui/fonts";
import { ThankYou } from "./thankyou";

export const Skills = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10'>
            <p className={`${bodoniModa.className} ${styles.scrollanimate} font-black italic px-4 text-6xl`}>Skills</p>
            <div className="flex flex-col py-10 px-4 items-center sm:flex-row sm:space-x-10 justify-center space-y-10 sm:space-y-0">

                <Image className={`${styles.scrollanimate}`} src="/selectionone.svg" alt="Group of skill logos" width={300} height={300} />
                <Image className={`${styles.scrollanimate}`} src="/selectiontwo.svg" alt="Group of skill logos" width={300} height={300} />
            </div>
            <div className="flex flex-col justify-end items-center p-10">
                <ThankYou />
            </div>
        </div>
    );
}