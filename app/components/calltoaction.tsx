import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
});


export const CallToAction = () => {
    return (
        <div>
            <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic my-2 p-4 text-sm lg:text-lg md:text-md`}>Hello! Welcome to my portfolio! In need of a website? An Android mobile app? Look no further!</p>
        </div>
    );
}