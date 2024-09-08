import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PizzaDough, PizzaWeight } from '@/entities/Food';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FoodFormDoughProps {
    setDough: (dough: PizzaDough) => void;
    dough: PizzaDough;
    weight: PizzaWeight;
    className?: string;
}

export const FoodFormDough = memo((props: FoodFormDoughProps) => {
    const { t } = useTranslation();
    const { className, setDough, weight, dough } = props;

    const setThinDough = () => setDough(PizzaDough.THIN);
    const setTraditionalDough = () => setDough(PizzaDough.TRADITIONAL);

    const setActiveStyle = (active: PizzaDough) =>
        dough === active ? 'accent' : 'inverted';

    return (
        <HStack gap="8" className={classNames('', {}, [className])} max>
            <Button
                max
                onClick={setTraditionalDough}
                size="size_xs"
                theme={setActiveStyle(PizzaDough.TRADITIONAL)}
            >
                {t(PizzaDough.TRADITIONAL)}
            </Button>
            <Button
                max
                disabled={weight === PizzaWeight.SMALL}
                onClick={setThinDough}
                size="size_xs"
                theme={setActiveStyle(PizzaDough.THIN)}
            >
                {t(PizzaDough.THIN)}
            </Button>
        </HStack>
    );
});
