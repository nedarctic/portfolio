import Image from 'next/image';
import { bodoniModa } from "../ui/fonts"

export const Footer = () => {
    return (
        <footer className='bg-footer-image bg-no-repeat bg-cover p-10'>
            <div className='flex flex-col justify-start items-center space-y-4 lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 lg:justify-center'>
                <div className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-4'>
                    <div className='flex-col space-y-4'>
                        <div className='flex items-center flex-row space-x-3'>
                            <Image src="/whatsappicon.svg" alt="WhatsApp icon" width={40} height={40} />
                            <p className={`${bodoniModa.className} font-bodoni text-black font-normal text-sm lg:text-lg md:text-md space-x-5`}>+254797517270</p>
                        </div>
                        <div className='flex items-center flex-row space-x-3'>
                            <Image src="/gmailicon.svg" alt="Gmail icon" width={40} height={40} />
                            <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>justkimtai@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex-col space-y-4'>
                        <div className='flex items-center flex-row space-x-3'>
                            <Image src="/facebookicon.svg" alt="Facebook icon" width={40} height={40} />
                            <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>Justus Kimtai</p>
                        </div>
                        <div className='flex items-center flex-row space-x-3'>
                            <Image src="/twittericon.svg" alt="Twitter icon" width={40} height={40} />
                            <p className={`${bodoniModa.className} font-bodoni text-black font-normal italic text-sm lg:text-lg md:text-md space-x-5`}>justkimtai</p>
                        </div>
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