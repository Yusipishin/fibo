import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DoughWeight,
    Pizza,
    PizzaDough,
    PizzaWeight,
    Weight,
} from '@/entities/Food';
import { Text } from '@/shared/ui/Text';

export const mapPizzaSize: Record<PizzaWeight, number> = {
    [PizzaWeight.SMALL]: 25,
    [PizzaWeight.AVERAGE]: 30,
    [PizzaWeight.BIG]: 35,
};

export const mapPizzaDough: Record<PizzaDough, string> = {
    [PizzaDough.THIN]: 'thin',
    [PizzaDough.TRADITIONAL]: 'traditional',
};

export const mapPizzaWeight: Record<PizzaWeight, string> = {
    [PizzaWeight.SMALL]: 'small',
    [PizzaWeight.AVERAGE]: 'average',
    [PizzaWeight.BIG]: 'big',
};

interface FoodFormInfoProps {
    food: Pizza;
    dough?: PizzaDough;
    weight?: PizzaWeight;
}

export const FoodFormInfo = memo((props: FoodFormInfoProps) => {
    const { t } = useTranslation();
    const { food, dough, weight } = props;

    const size = mapPizzaSize[weight];

    const doughEn = mapPizzaDough[dough] as keyof Weight;
    const weighthEn = mapPizzaWeight[weight] as keyof DoughWeight;
    const weightValue = food?.weight[doughEn]?.[weighthEn];

    return (
        <Text text={t(`${size} см, ${dough} тесто, ${weightValue ?? 0} г`)} />
    );
});
