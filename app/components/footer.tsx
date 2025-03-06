import Image from 'next/image';
import Link from 'next/link';

import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
});


export const Footer = () => {
    return (
        <footer className='bg-footer-image bg-no-repeat bg-cover p-10'>
            <div className='flex flex-col justify-start items-center space-y-4 lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 lg:justify-center'>
                <div className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-4'>
                    <div className='flex-col space-y-4'>
                        <Link href="https://wa.me/+254797517270" target='_blank' rel='noopener noreferrer' className="block">
                            <div className='flex items-center flex-row space-x-3'>
                                <Image src="/whatsappicon.svg" alt="WhatsApp icon" width={40} height={40} />
                                <p className={`${bodoniModa.className} font-bodoni text-black font-normal text-sm lg:text-lg md:text-md space-x-5`}>+254797517270</p>
                            </div>
                        </Link>
                        <Link href="mailto:justkimtai@gmail.com" target="_blank" rel="noopener noreferrer" className='block'>
                            <div className='flex items-center flex-row space-x-3'>
                                <Image src="/gmailicon.svg" alt="Gmail icon" width={40} height={40} />
                                <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>justkimtai@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className='flex-col space-y-4'>
                        <Link href="https://facebook.com/justkimtai" target="_blank" rel="noopener noreferrer" className='block'>
                            <div className='flex items-center flex-row space-x-3'>
                                <Image src="/facebookicon.svg" alt="Facebook icon" width={40} height={40} />
                                <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>Justus Kimtai</p>
                            </div>
                        </Link>
                        <Link href="https://twitter.com/justkimtai" target="_blank" rel="noopener noreferrer" className='block'>
                            <div className='flex items-center flex-row space-x-3'>
                                <Image src="/twittericon.svg" alt="Twitter icon" width={40} height={40} />
                                <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>justkimtai</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <Image src="/logo.svg" alt="Logo in the footer section" width={200} height={200} className='self-center' />
                    <div className='self-center'>
                        <p className={`${bodoniModa.className} font-bodoni text-black font-normal text-sm lg:text-lg md:text-md space-x-5`}>Justus Kimtai</p>
                        <p className={`${bodoniModa.className} font-bodoni text-black font-normal text-sm space-x-5`}>2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}