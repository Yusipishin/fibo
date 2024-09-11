import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import MastercardIcon from '@/shared/assets/img/icons/mastercard-ic.svg';
import FacebookIcon from '@/shared/assets/img/icons/messengers/fb-ic.svg';
import FacebookMessengerIcon from '@/shared/assets/img/icons/messengers/fbm-ic.svg';
import SkypeIcon from '@/shared/assets/img/icons/messengers/skype-ic.svg';
import TelegramIcon from '@/shared/assets/img/icons/messengers/tg-ic.svg';
import ViberIcon from '@/shared/assets/img/icons/messengers/viber-ic.svg';
import VkIcon from '@/shared/assets/img/icons/messengers/vk-ic.svg';
import PaypalIcon from '@/shared/assets/img/icons/paypal-ic.svg';
import VisaIcon from '@/shared/assets/img/icons/visa-ic.svg';
import Logo from '@/shared/assets/img/logo.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Container } from '@/shared/ui/Container';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './Footer.module.scss';
import { Button } from '@/shared/ui/Button';
import { PHONE_NUMBER } from '@/shared/const/telephone';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Container
            Tag="footer"
            className={classNames(cls.Footer, {}, [className])}
        >
            <HStack gap="64" justify="between">
                <VStack max>
                    <AppLink to="/">
                        <AppImage
                            src={Logo}
                            alt={t('Логотип сайта Fibo')}
                            fallback={<Skeleton width={80} height={60} />}
                        />
                    </AppLink>
                    <HStack className={cls.info} gap="64">
                        <Text text={t('Калорийность и состав')} />
                        <Text text={t('Правовая информация')} />
                    </HStack>
                    <Text text={t('Мы в соцсетях')} />
                    <HStack
                        max
                        gap="64"
                        justify="between"
                        className={cls.social}
                    >
                        <VStack gap="8">
                            <Text text={t('YouTube')} />
                            <Text text={t('Instagram')} />
                        </VStack>
                        <VStack gap="8">
                            <Text text={t('Facebook')} />
                            <Text text={t('ВКонтакте')} />
                        </VStack>
                        <Text
                            className={cls.address}
                            text={t('Москва ул. Проспект Вернадского 86В')}
                        />
                    </HStack>
                    <HStack max justify="between">
                        <Text text={t('YaBao Все права защищены © 2024')} />
                        <HStack>
                            <Icon Svg={VisaIcon} />
                            <Icon Svg={PaypalIcon} />
                            <Icon Svg={MastercardIcon} />
                        </HStack>
                    </HStack>
                </VStack>
                <VStack>
                    <Text text={t('ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:')} />
                    <div className={cls.messengers}>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger1}
                        >
                            <Icon Svg={ViberIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger2}
                        >
                            <Icon Svg={FacebookIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger3}
                        >
                            <Icon Svg={FacebookMessengerIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger4}
                        >
                            <Icon Svg={SkypeIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger5}
                        >
                            <Icon Svg={TelegramIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger6}
                        >
                            <Icon Svg={VkIcon} />
                        </AppLink>
                        <AppLink
                            to="/"
                            theme="outline"
                            className={cls.messenger7}
                        >
                            <Text text={t('Написать нам')} />
                        </AppLink>
                    </div>
                    <AppLink to={`tel:${PHONE_NUMBER}`}>
                        <Text
                            theme="accent"
                            size={TextSize.XL}
                            text={t('Номер телефона сайта')}
                        />
                    </AppLink>
                    <Button className={cls.callBtn} theme="inverted">
                        {t('Заказать звонок')}
                    </Button>
                </VStack>
            </HStack>
        </Container>
    );
});
