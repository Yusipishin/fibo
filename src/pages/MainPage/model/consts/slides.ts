import Slide1 from '@/shared/assets/img/slider/MainPage/slide-1.jpg';
import Slide2 from '@/shared/assets/img/slider/MainPage/slide-2.jpg';
import Slide3 from '@/shared/assets/img/slider/MainPage/slide-3.jpg';
import Slide4 from '@/shared/assets/img/slider/MainPage/slide-4.jpg';

interface mainSlide {
    to: string;
    src: string;
    alt: string;
}

export const mainSlides: mainSlide[] = [
    {
        to: '/',
        src: Slide1,
        alt: 'Акция номер 1',
    },
    {
        to: '/',
        src: Slide2,
        alt: 'Акция номер 2',
    },
    {
        to: '/',
        src: Slide3,
        alt: 'Акция номер 3',
    },
    {
        to: '/',
        src: Slide4,
        alt: 'Акция номер 4',
    },
];
