import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Slide1 from '@/shared/assets/img/slider/MainPage/slide-1.jpg';
import Slide2 from '@/shared/assets/img/slider/MainPage/slide-2.jpg';
import Slide3 from '@/shared/assets/img/slider/MainPage/slide-3.jpg';
import Slide4 from '@/shared/assets/img/slider/MainPage/slide-4.jpg';
import cls from './MainPageSlider.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

interface slide {
    to: string;
    src: string;
    alt: string;
}

export const slides: slide[] = [
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

export const MainPageSlider = memo(() => (
    <Swiper
        navigation={{
            prevEl: '.swiper-prev-arrow',
            nextEl: '.swiper-next-arrow',
        }}
        initialSlide={1}
        slidesPerView={2}
        modules={[Navigation]}
        allowTouchMove={false}
    >
        {slides.map(({ alt, src, to }) => (
            <SwiperSlide key={src} className={cls.slider}>
                {({ isActive, isNext }) => {
                    if (!isNext && !isActive) {
                        return (
                            <AppImage
                                alt={alt}
                                src={src}
                                className={cls.sideImg}
                            />
                        );
                    }
                    return (
                        <AppLink to={to}>
                            <AppImage alt={alt} src={src} />
                        </AppLink>
                    );
                }}
            </SwiperSlide>
        ))}
        <Button radius="halfRadius" className="swiper-prev-arrow" />
        <Button radius="halfRadius" className="swiper-next-arrow" />
    </Swiper>
));
