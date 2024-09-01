import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodFormAdditionalIngredients.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Text, TextSize } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { AllFoodProps } from '@/entities/Food';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface FoodFormAdditionalIngredientsProps {
    food: AllFoodProps;
    className?: string;
}

export const FoodFormAdditionalIngredients = memo(
    (props: FoodFormAdditionalIngredientsProps) => {
        const { className, food } = props;

        return (
            <HStack
                max
                wrap
                gap="8"
                justify="between"
                className={classNames(cls.FoodFormAdditionalIngredients, {}, [
                    className,
                ])}
            >
                {food.ingredients.additional.map((ingr) => (
                    <Button
                        theme={ButtonTheme.OUTLINE_SECONDARY}
                        className={cls.addIngr}
                    >
                        <AppImage className={cls.ingrImg} src={ingr.img} />
                        <Text
                            align="center"
                            size={TextSize.XS}
                            text={ingr.name}
                        />
                        <Text
                            align="center"
                            size={TextSize.XS}
                            text={`${ingr.sale.average} ₽`}
                        />
                    </Button>
                ))}
            </HStack>
        );
    },
);
