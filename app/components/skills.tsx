import Image from "next/image"
import styles from '../styles/ScrollAnimate.module.css';

export const Skills = () => {
    return (
    <div className="flex flex-col py-10 px-4 items-center sm:flex-row sm:space-x-10 justify-center space-y-10 sm:space-y-0">
        <Image className={`${styles.scrollanimate}`} src="/selectionone.svg" alt="Group of skill logos" width={300} height={300} />
        <Image className={`${styles.scrollanimate}`} src="/selectiontwo.svg" alt="Group of skill logos" width={300} height={300} />
    </div>
    );
}