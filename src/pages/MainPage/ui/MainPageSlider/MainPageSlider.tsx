import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { mainSlides } from '../../model/consts/slides';
import { Container } from '@/shared/ui/Container';
import cls from './MainPageSlider.module.scss';

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
        >
            {mainSlides.map(({ alt, src, to }) => (
                <SwiperSlide key={src} className={cls.slider}>
                    {({ isActive, isNext }) => {
                        const isSide = !isNext && !isActive;
                        return (
                            <AppLink
                                to={to}
                                className={isSide ? cls.sideLink : null}
                            >
                                <AppImage
                                    alt={alt}
                                    src={src}
                                    className={isSide ? cls.sideImg : null}
                                />
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
