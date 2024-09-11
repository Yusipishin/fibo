import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import cls from './MainPageSlider.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { mainSlides } from '../../model/consts/slides';
import { Container } from '@/shared/ui/Container';

export const MainPageSlider = memo(() => (
    <Container>
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
            {mainSlides.map(({ alt, src, to }) => (
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
    </Container>
));
