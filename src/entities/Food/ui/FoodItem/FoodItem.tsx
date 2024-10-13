import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { FoodAllProps } from '../../model/types/food';
import cls from './FoodItem.module.scss';

interface FoodItemProps {
    food: FoodAllProps;
    className?: string;
    onShowModal?: (food: FoodAllProps) => void;
}

function FoodItem({ className, food, onShowModal }: FoodItemProps) {
    const { t } = useTranslation();

    const ingredients = food?.ingredients?.required.concat(
        food?.ingredients?.optional,
    );

    return (
        <VStack
            gap="16"
            justify="between"
            onClick={() => onShowModal(food)}
            className={classNames(cls.FoodItem, {}, [className])}
        >
            <VStack>
                <AppImage className={cls.img} src={food.img} />
                <Text
                    theme="secondary"
                    size={TextSize.L}
                    title={{ txt: food.name, tag: 'h3' }}
                />
                <Text
                    theme="secondary"
                    size={TextSize.S}
                    text={
                        food.description ??
                        ingredients.map((ingr) => ingr).join(', ')
                    }
                />
            </VStack>
            <HStack justify="between" max>
                <Text
                    size={TextSize.ML}
                    text={`от ${food.sale.average || food.sale} ₽`}
                />
                <Button theme="accent">
                    <Text theme="bg" text={t('В корзину')} />
                </Button>
            </HStack>
        </VStack>
    );
}

export default memo(FoodItem);
