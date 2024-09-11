import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import Logo from '@/shared/assets/img/logo.png';
import YandexIcon from '@/shared/assets/img/icons/yandex-food-ic.svg';
import StarIcon from '@/shared/assets/img/icons/star-ic.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Text, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';
import cls from './HeaderTop.module.scss';
import { PHONE_NUMBER } from '@/shared/const/telephone';

interface HeaderTopProps {
    className?: string;
}

const Circle = () => <div className={cls.Circle} />;

export const HeaderTop = memo((props: HeaderTopProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <HStack max justify="between">
            <HStack gap="64">
                <AppLink to="/">
                    <AppImage
                        src={Logo}
                        alt={t('Логотип сайта Fibo')}
                        fallback={<Skeleton width={80} height={60} />}
                    />
                </AppLink>
                <VStack gap="8">
                    <HStack gap="8">
                        <Text title={{ txt: t('Доставка пасты'), tag: 'h1' }} />
                        <Button>
                            <Text theme="accent" text={t('Москва')} />
                        </Button>
                    </HStack>
                    <HStack gap="32">
                        <HStack gap="8">
                            <Icon Svg={YandexIcon} />
                            <Text text={t('Яндекс еда')} />
                            <Circle />
                            <Text text={t('4.8')} />
                            <Icon Svg={StarIcon} />
                        </HStack>
                        <HStack gap="8">
                            <Text text={t('Время доставки')} />
                            <Circle />
                            <Text text={t('от 31 мин')} />
                        </HStack>
                    </HStack>
                </VStack>
            </HStack>
            <HStack gap="32">
                <Button className={cls.callBtn} theme="inverted">
                    {t('Заказать звонок')}
                </Button>
                <AppLink to={`tel:${PHONE_NUMBER}`}>
                    <Text
                        theme="accent"
                        size={TextSize.L}
                        text={t('Номер телефона сайта')}
                    />
                </AppLink>
            </HStack>
        </HStack>
    );
});
