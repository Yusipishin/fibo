import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Text } from '@/shared/ui/Text';
import { AllFoodProps } from '../../model/types/food';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

interface FoodItemProps {
    data: AllFoodProps;
    className?: string;
}

function FoodItem({ className, data }: FoodItemProps) {
    const { t } = useTranslation();

    return (
        <VStack
            gap="16"
            justify="between"
            className={classNames(cls.FoodItem, {}, [className])}
        >
            <VStack>
                <AppImage className={cls.img} src={data.img} />
                <Text title={data.name} />
                <Text
                    text={
                        data.description ||
                        data.ingredients.primary
                            .map((item) => item.name)
                            .join(', ')
                    }
                />
            </VStack>
            <HStack justify="between" max>
                <Text text={`от ${data.sale.average || data.sale} ₽`} />
                <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                    {t('В корзину')}
                </Button>
            </HStack>
        </VStack>
    );
}

export default memo(FoodItem);
