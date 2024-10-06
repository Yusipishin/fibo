import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import {
    AllFoodProps,
    FoodType,
    PizzaDough,
    PizzaWeight,
} from '@/entities/Food';
import { FoodFormAdditionalIngredients } from '../FoodFormAdditionalIngredients/FoodFormAdditionalIngredients';
import { FoodFormDough } from '../FoodFormDough/FoodFormDough';
import { FoodFormInfo } from '../FoodFormInfo/FoodFormInfo';
import { FoodFormIngredients } from '../FoodFormIngredients/FoodFormIngredients';
import { FoodFormWeight } from '../FoodFormWeight/FoodFormWeight';
import cls from './FoodForm.module.scss';
import { useAddCartItem } from '@/entities/Cart';
import { getUserAuthData } from '@/entities/User';

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
    const [addCartItemMutation] = useAddCartItem();
    const userData = useSelector(getUserAuthData);

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

    const handleAddCartItem = useCallback(() => {
        try {
            addCartItemMutation({
                count: 1,
                price,
                dough,
                weight,
                name: food.name,
                description: ingredients.join(', '),
                img: food.img,
                userId: userData?.id ?? '',
            });
        } catch (e) {
            console.log(e);
        }
    }, [
        addCartItemMutation,
        dough,
        food.img,
        food.name,
        ingredients,
        price,
        userData?.id,
        weight,
    ]);

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
                            food={food}
                            weight={weight}
                            dough={dough}
                            price={price}
                            setPrice={setPrice}
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
                            setPrice={setPrice}
                            price={price}
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
                    max
                    theme="accent"
                    onClick={handleAddCartItem}
                    className={classNames(cls.addBtn, {}, [
                        food.type === FoodType.PIZZA && cls.shadowTop,
                    ])}
                >
                    {t('Добавить в корзину ') + price}
                </Button>
            </VStack>
        </HStack>
    );
});

export default FoodForm;
