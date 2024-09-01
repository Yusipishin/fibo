import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { PizzaDough, PizzaWeight } from '@/entities/Food';

interface FoodFormWeightProps {
    setWeight: (weight: PizzaWeight) => void;
    dough: PizzaDough;
    className?: string;
}

export const FoodFormWeight = memo((props: FoodFormWeightProps) => {
    const { t } = useTranslation();
    const { className, setWeight, dough } = props;

    const setSmallWeight = () => setWeight(PizzaWeight.SMALL);
    const setAverageWeight = () => setWeight(PizzaWeight.AVERAGE);
    const setBigWeight = () => setWeight(PizzaWeight.BIG);

    return (
        <HStack gap="8" className={classNames('', {}, [className])} max>
            <Button
                max
                disabled={dough === PizzaDough.THIN}
                onClick={setSmallWeight}
                size={ButtonSize.XS}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t(PizzaWeight.SMALL)}
            </Button>
            <Button
                max
                onClick={setAverageWeight}
                size={ButtonSize.XS}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t(PizzaWeight.AVERAGE)}
            </Button>
            <Button
                max
                onClick={setBigWeight}
                size={ButtonSize.XS}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t(PizzaWeight.BIG)}
            </Button>
        </HStack>
    );
});
