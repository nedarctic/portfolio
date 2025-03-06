import { Bodoni_Moda } from "next/font/google";
import styles from '../styles/ScrollAnimate.module.css';

const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
});


export const AboutText = () => {
    return(
        <p className={`${bodoniModa.className} ${styles.scrollanimate} font-bodoni text-black font-normal italic my-2 p-4 text-sm lg:text-lg md:text-md sm:w-1/3`}>
        I am a full-stack web/android developer
        based in Kenya with great expertise in 
        developing user-focused solutions. 
        I draw from a rich experience in 
        software development to deliver 
        high quality work to clients. 
        To check out some of my work, 
        click on Work in the menu tab!</p>
    );
}
