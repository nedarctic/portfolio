import styles from '../styles/ScrollAnimate.module.css';
import { spaceMono } from "@/app/ui/fonts";
import { ThankYou } from "../components/thankyou";

export default function ContactPage() {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 lg:px-20 md:px-10 sm:px-8 px-7 py-10'>
            <p className={`${spaceMono.className} ${styles.scrollanimate} text-black font-extrabold italic px-4 text-6xl`}>Contact</p>
            <p className={`${spaceMono.className} ${styles.scrollanimate} self-start italic px-4 text-sm text-black`}>If you&apos;re looking for:
                a dedicated professional to turn your ideas into reality,
                a proficient coder who can handle both frontend and backend tasks,
                or someone passionate about contributing to impactful projects,
                you’ve come to the right place! Let&apos;s build something amazing together.
                Get in Touch 📬
                Feel free to reach out for collaborations, hiring, or volunteering opportunities! Let&apos;s connect, hit any of the contacts in this footer.</p>
            <ThankYou />
        </div>
    );
}