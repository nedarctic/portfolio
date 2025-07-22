import { spaceMono } from "@/app/ui/fonts";
import styles from '../styles/ScrollAnimate.module.css';


export const AboutText = () => {
    return (
        <p className={`${spaceMono.className} ${styles.scrollanimate} text-white font-normal italic my-2 p-4 text-sm lg:text-2xl md:text-md w-full md:w-1/2`}>
            I am a full-stack web/android developer with over <span className="font-semibold underline">5 years of experience</span> based in Kenya with great expertise in developing user-focused solutions.</p>
    );
}