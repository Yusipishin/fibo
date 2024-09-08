import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { AllFoodProps } from '../../model/types/food';
import cls from './FoodItem.module.scss';

interface FoodItemProps {
    food: AllFoodProps;
    className?: string;
    onShowModal?: (food: AllFoodProps) => void;
}

function FoodItem({ className, food, onShowModal }: FoodItemProps) {
    const { t } = useTranslation();

    return (
        <VStack
            gap="16"
            justify="between"
            onClick={() => onShowModal(food)}
            className={classNames(cls.FoodItem, {}, [className])}
        >
            <VStack>
                <AppImage className={cls.img} src={food.img} />
                <Text size={TextSize.L} title={{ txt: food.name, tag: 'h3' }} />
                <Text
                    size={TextSize.S}
                    text={
                        food.description ??
                        food.ingredients.primary
                            .map((food) => food.name)
                            .join(', ')
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
