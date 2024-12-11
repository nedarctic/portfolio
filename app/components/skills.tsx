import Image from "next/image"
import styles from '../styles/ScrollAnimate.module.css';

export const Skills = () => {
    return(
        <div className="flex flex-col items-center sm:flex-row sm:space-x-10 justify-center">
            <Image className={`${styles.scrollanimate}`} src="/selectionone.svg" alt="Group of skill logos" width={300} height={300}/>
            <Image className={`${styles.scrollanimate}`} src="/selectiontwo.svg" alt="Group of skill logos" width={300} height={300}/>
        </div>
    );
}