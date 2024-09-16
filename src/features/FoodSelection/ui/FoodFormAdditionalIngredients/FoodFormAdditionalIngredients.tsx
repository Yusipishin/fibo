import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodFormAdditionalIngredients.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Text, TextSize } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import {
    AdditionalIngredient,
    DoughWeight,
    PizzaWeight,
} from '@/entities/Food';
import { Button } from '@/shared/ui/Button';
import { mapPizzaWeight } from '../FoodFormInfo/FoodFormInfo';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { Skeleton } from '@/shared/ui/Skeleton';

interface FoodFormAdditionalIngredientsProps {
    weight: PizzaWeight;
    className?: string;
    ingredients: string[];
    setIngredients: (list: string[]) => void;
}

const getSkeletons = () =>
    new Array(6)
        .fill(0)
        .map((_, i) => <Skeleton key={i} height={150} width={110} />);

export const FoodFormAdditionalIngredients = memo(
    (props: FoodFormAdditionalIngredientsProps) => {
        const { t } = useTranslation();
        const { className, weight, setIngredients, ingredients } = props;
        const {
            data: ingredientList,
            isLoading,
            isError,
        } = useGetList<AdditionalIngredient, string>('additional-ingredients');
        const weighthEn = mapPizzaWeight[weight] as keyof DoughWeight;

        const handleClick = (ingr: string) => () => {
            const newIngredients = ingredients.includes(ingr)
                ? ingredients.filter((item) => item !== ingr)
                : [...ingredients, ingr];
            setIngredients(newIngredients);
        };

        if (isError) {
            return (
                <Text
                    theme="error"
                    text={t('Произошла непредвиденная ошибка')}
                />
            );
        }

        if (!isLoading && !ingredientList.length) {
            return <Text text={t('Дополнительные ингредиенты не найдены')} />;
        }

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
                {ingredientList?.map((ingr) => {
                    if (!ingr?.sale[weighthEn]) return null;

                    return (
                        <Button
                            theme="outline"
                            onClick={handleClick(ingr.name)}
                            className={classNames(cls.addIngr, {
                                [cls.selected]: ingredients.includes(ingr.name),
                            })}
                        >
                            <AppImage className={cls.ingrImg} src={ingr.img} />
                            <Text
                                align="center"
                                size={TextSize.S}
                                text={ingr.name}
                            />
                            <Text
                                theme="accent"
                                align="center"
                                size={TextSize.S}
                                text={`${ingr?.sale[weighthEn]} ₽`}
                            />
                        </Button>
                    );
                })}
                {isLoading && getSkeletons()}
            </HStack>
        );
    },
);
