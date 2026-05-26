import { Montserrat, Poppins, DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const AvenirFont = localFont({
   src: [
      {
         path: '../fonts/avenir-light.ttf',
         weight: '200',
         style: 'light',
      },
      {
         path: '../fonts/avenir-book.ttf',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../fonts/avenir-regular.ttf',
         weight: '500',
         style: 'bold',
      },
      {
         path: '../fonts/avenir-heavy.ttf',
         weight: '700',
         style: 'bolder',
      },
      {
         path: '../fonts/avenir-black.ttf',
         weight: '900',
         style: 'boldest',
      },
   ],
   variable: '--font-avenir-hyh',
});

export const MontserratFont = Montserrat({
   weight: ["100","200","300","400","500","600","700","800","900"],
   subsets: ['latin']
});

export const PoppinsFont = Poppins({
   weight: ["100","200","300","400","500","600","700","800","900"],
   subsets: ['latin']
});

export const DM_SansFont = DM_Sans({
   weight: ["100","200","300","400","500","600","700","800","900"],
   subsets: ['latin']
});