import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Container } from '@/shared/ui/Container';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { PHONE_NUMBER } from '@/shared/const/telephone';
import Logo from '@/shared/assets/img/logo.png';
import cls from './Footer.module.scss';
import { messengersIcons, paymentIcons } from '../model/consts/icons';
import { Icon } from '@/shared/ui/Icon';

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
                        <HStack gap="16">
                            {paymentIcons.map((Item, i) => (
                                <Icon key={i} Svg={Item} />
                            ))}
                        </HStack>
                    </HStack>
                </VStack>
                <VStack>
                    <Text text={t('ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:')} />
                    <div className={cls.messengers}>
                        {messengersIcons.map((Item, i) => (
                            <AppLink
                                to="/"
                                key={i}
                                theme="outline"
                                className={cls.messenger}
                            >
                                <Icon Svg={Item} />
                            </AppLink>
                        ))}
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
