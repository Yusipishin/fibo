import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AllFoodProps,
    FoodType,
    PizzaDough,
    PizzaWeight,
} from '@/entities/Food';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './FoodForm.module.scss';
import { FoodFormWeight } from '../FoodFormWeight/FoodFormWeight';
import { FoodFormDough } from '../FoodFormDough/FoodFormDough';
import { FoodFormAdditionalIngredients } from '../FoodFormAdditionalIngredients/FoodFormAdditionalIngredients';
import { FoodFormInfo } from '../FoodFormInfo/FoodFormInfo';
import { Button } from '@/shared/ui/Button';
import { FoodFormIngredients } from '../FoodFormPrimaryIngredients/FoodFormPrimaryIngredients';

export interface FoodFormProps {
    food: AllFoodProps;
    className?: string;
    isOpen: boolean;
}

const FoodForm = memo((props: FoodFormProps) => {
    const { t } = useTranslation();
    const { className, food, isOpen } = props;

    const [price, setPrice] = useState(0);
    const [dough, setDough] = useState(PizzaDough.TRADITIONAL);
    const [weight, setWeight] = useState(PizzaWeight.AVERAGE);
    const [ingredients, setIngredients] = useState(['']);

    useEffect(() => {
        if (isOpen) {
            setPrice(food.sale.average ?? food.sale);
        } else {
            setPrice(0);
            setDough(PizzaDough.TRADITIONAL);
            setWeight(PizzaWeight.AVERAGE);
            setIngredients([]);
        }
    }, [food.sale, isOpen]);

    return (
        <HStack className={classNames(cls.FoodForm, {}, [className])}>
            <AppImage className={cls.img} alt={food.name} src={food.img} />
            <VStack max gap="8" className={cls.wrapper}>
                <Text
                    size={TextSize.ML}
                    title={{ txt: food.name, tag: 'h3' }}
                />
                {food.type === FoodType.PIZZA ? (
                    <>
                        <FoodFormInfo
                            food={food}
                            dough={dough}
                            weight={weight}
                        />
                        <FoodFormIngredients
                            ingredients={ingredients}
                            setIngredients={setIngredients}
                            food={food}
                        />
                        <FoodFormWeight
                            weight={weight}
                            dough={dough}
                            setWeight={setWeight}
                        />
                        <FoodFormDough
                            dough={dough}
                            weight={weight}
                            setDough={setDough}
                        />
                        <FoodFormAdditionalIngredients
                            ingredients={ingredients}
                            setIngredients={setIngredients}
                            weight={weight}
                        />
                    </>
                ) : (
                    <>
                        <Text text={food.description} />
                        <Text
                            text={food.portion}
                            align="center"
                            className={cls.portion}
                        />
                    </>
                )}

                <Button
                    className={classNames(cls.addBtn, {}, [
                        food.type === FoodType.PIZZA && cls.shadowTop,
                    ])}
                    max
                    theme="accent"
                >
                    {t('Добавить в корзину ') + price}
                </Button>
            </VStack>
        </HStack>
    );
});

export default FoodForm;
