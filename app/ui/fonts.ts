import { Bodoni_Moda, Montserrat} from 'next/font/google';

export const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    variable: '--font-bodoni-moda',
  });

  export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    variable: '--font-montserrat-libre',
  });