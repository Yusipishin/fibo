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
import { Text } from '@/shared/ui/Text';
import cls from './FoodForm.module.scss';
import { FoodFormPrimaryIngredients } from '../FoodFormPrimaryIngredients/FoodFormPrimaryIngredients';
import { FoodFormWeight } from '../FoodFormWeight/FoodFormWeight';
import { FoodFormDough } from '../FoodFormDough/FoodFormDough';
import { FoodFormAdditionalIngredients } from '../FoodFormAdditionalIngredients/FoodFormAdditionalIngredients';
import { FoodFormAddButton } from '../FoodFormAddButton/FoodFormAddButton';
import { FoodFormInfo } from '../FoodFormInfo/FoodFormInfo';

// import { FoodCustomizeReducer } from '../../model/slices/FoodSelectionSlice';

export interface FoodFormProps {
    food: AllFoodProps;
    className?: string;
}

// const initialReducers: ReducersList = {
//     foodCustomizeForm: FoodCustomizeReducer,
// };

const FoodForm = memo((props: FoodFormProps) => {
    const { t } = useTranslation();
    const { className, food } = props;

    const [price, setPrice] = useState(0);
    const [dough, setDough] = useState(PizzaDough.TRADITIONAL);
    const [weight, setWeight] = useState(PizzaWeight.AVERAGE);

    useEffect(() => {
        setPrice(food.sale.average ?? food.sale);

        return () => {
            setPrice(0);
            setDough(PizzaDough.TRADITIONAL);
            setWeight(PizzaWeight.AVERAGE);
        };
    }, [food.sale]);

    return (
        // <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        <HStack className={classNames(cls.FoodForm, {}, [className])}>
            <AppImage className={cls.img} alt={food.name} src={food.img} />
            <VStack max gap="8" className={cls.wrapper}>
                <Text text={food.name} />
                {food.type === FoodType.PIZZA ? (
                    <>
                        <FoodFormInfo
                            food={food}
                            dough={dough}
                            weight={weight}
                        />
                        <FoodFormPrimaryIngredients food={food} />
                        <FoodFormWeight dough={dough} setWeight={setWeight} />
                        <FoodFormDough weight={weight} setDough={setDough} />
                        <FoodFormAdditionalIngredients food={food} />
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

                <FoodFormAddButton price={price} />
            </VStack>
        </HStack>
        // </DynamicModuleLoader>
    );
});

export default FoodForm;
