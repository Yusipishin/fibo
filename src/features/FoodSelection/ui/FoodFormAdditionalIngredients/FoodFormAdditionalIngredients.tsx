import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodFormAdditionalIngredients.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Text, TextSize } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
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
    setPrice: (price: number) => void;
    price: number;
}

const getSkeletons = () =>
    new Array(6)
        .fill(0)
        .map((_, i) => <Skeleton key={i} height={150} width={110} />);

export const FoodFormAdditionalIngredients = memo(
    (props: FoodFormAdditionalIngredientsProps) => {
        const { t } = useTranslation();
        const {
            className,
            weight,
            setIngredients,
            ingredients,
            setPrice,
            price,
        } = props;
        const {
            data: ingredientList,
            isLoading,
            isError,
        } = useGetList<AdditionalIngredient, string>('additional-ingredients');
        const weighthEn = mapPizzaWeight[weight] as keyof DoughWeight;

        const handleClick = (ingr: AdditionalIngredient) => () => {
            if (ingredients.includes(ingr.name)) {
                setIngredients(
                    ingredients.filter((item) => item !== ingr.name),
                );
                setPrice(price - ingr.sale[weighthEn]);
            } else {
                setIngredients([...ingredients, ingr.name]);
                setPrice(price + ingr.sale[weighthEn]);
            }
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
                align="stretch"
                justify="between"
                className={classNames('', {}, [className])}
            >
                {ingredientList?.map((ingr) => {
                    if (!ingr?.sale[weighthEn]) return null;

                    return (
                        <Button
                            key={ingr.img}
                            theme="outline"
                            onClick={handleClick(ingr)}
                            className={classNames(cls.addIngr, {
                                [cls.selected]: ingredients.includes(ingr.name),
                            })}
                        >
                            <VStack gap="4" align="center" justify="center" max>
                                <AppImage
                                    className={cls.ingrImg}
                                    src={ingr.img}
                                />
                                <Text
                                    align="center"
                                    size={TextSize.XS}
                                    text={ingr.name}
                                    className={cls.ingrName}
                                />
                            </VStack>
                            <VStack align="center" max>
                                <Text
                                    theme="accent"
                                    align="center"
                                    size={TextSize.S}
                                    text={`${ingr?.sale[weighthEn]} ₽`}
                                />
                            </VStack>
                        </Button>
                    );
                })}
                {isLoading && getSkeletons()}
            </HStack>
        );
    },
);
