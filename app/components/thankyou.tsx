import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
});

export const ThankYou = () => {
    return <p className={`${bodoniModa.className} font-bodoni text-black font-normal text-sm lg:text-2xl italic md:text-md`}>Thank you for visiting! Let&apos;s get in touch!</p>
}