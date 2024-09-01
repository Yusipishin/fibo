import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PizzaDough, PizzaWeight } from '@/entities/Food';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FoodFormDoughProps {
    setDough: (dough: PizzaDough) => void;
    weight: PizzaWeight;
    className?: string;
}

export const FoodFormDough = memo((props: FoodFormDoughProps) => {
    const { t } = useTranslation();
    const { className, setDough, weight } = props;

    const setThinDough = () => setDough(PizzaDough.THIN);
    const setTraditionalDough = () => setDough(PizzaDough.TRADITIONAL);

    return (
        <HStack gap="8" className={classNames('', {}, [className])} max>
            <Button
                max
                onClick={setTraditionalDough}
                size={ButtonSize.XS}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t(PizzaDough.TRADITIONAL)}
            </Button>
            <Button
                max
                disabled={weight === PizzaWeight.SMALL}
                onClick={setThinDough}
                size={ButtonSize.XS}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t(PizzaDough.THIN)}
            </Button>
        </HStack>
    );
});
