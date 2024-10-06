import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Pizza, PizzaDough, PizzaWeight } from '@/entities/Food';

interface FoodFormWeightProps {
    setWeight: (weight: PizzaWeight) => void;
    setPrice: (price: number) => void;
    dough: PizzaDough;
    weight: PizzaWeight;
    className?: string;
    price: number;
    food: Pizza;
}

export const FoodFormWeight = memo((props: FoodFormWeightProps) => {
    const { t } = useTranslation();
    const { className, setWeight, setPrice, dough, weight, food, price } =
        props;

    const setSmallWeight = () => {
        if (weight === PizzaWeight.AVERAGE) {
            setPrice(price + food.sale.small - food.sale.average);
        } else if (weight === PizzaWeight.BIG) {
            setPrice(price + food.sale.small - food.sale.big);
        } else return;

        setWeight(PizzaWeight.SMALL);
    };

    const setAverageWeight = () => {
        if (weight === PizzaWeight.SMALL) {
            setPrice(price + food.sale.average - food.sale.small);
        } else if (weight === PizzaWeight.BIG) {
            setPrice(price + food.sale.average - food.sale.big);
        } else return;

        setWeight(PizzaWeight.AVERAGE);
    };

    const setBigWeight = () => {
        if (weight === PizzaWeight.AVERAGE) {
            setPrice(price + food.sale.big - food.sale.average);
        } else if (weight === PizzaWeight.SMALL) {
            setPrice(price + food.sale.big - food.sale.small);
        } else return;

        setWeight(PizzaWeight.BIG);
    };

    const setActiveStyle = (active: PizzaWeight) =>
        weight === active ? 'accent' : 'inverted';

    return (
        <HStack gap="8" className={classNames('', {}, [className])} max>
            <Button
                max
                disabled={dough === PizzaDough.THIN}
                onClick={setSmallWeight}
                size="size_xs"
                theme={setActiveStyle(PizzaWeight.SMALL)}
            >
                {t(PizzaWeight.SMALL)}
            </Button>
            <Button
                max
                onClick={setAverageWeight}
                size="size_xs"
                theme={setActiveStyle(PizzaWeight.AVERAGE)}
            >
                {t(PizzaWeight.AVERAGE)}
            </Button>
            <Button
                max
                onClick={setBigWeight}
                size="size_xs"
                theme={setActiveStyle(PizzaWeight.BIG)}
            >
                {t(PizzaWeight.BIG)}
            </Button>
        </HStack>
    );
});
