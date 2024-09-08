import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { PizzaDough, PizzaWeight } from '@/entities/Food';

interface FoodFormWeightProps {
    setWeight: (weight: PizzaWeight) => void;
    dough: PizzaDough;
    weight: PizzaWeight;
    className?: string;
}

export const FoodFormWeight = memo((props: FoodFormWeightProps) => {
    const { t } = useTranslation();
    const { className, setWeight, dough, weight } = props;

    const setSmallWeight = () => setWeight(PizzaWeight.SMALL);
    const setAverageWeight = () => setWeight(PizzaWeight.AVERAGE);
    const setBigWeight = () => setWeight(PizzaWeight.BIG);

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
