import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodForm.module.scss';

import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { AllFoodProps } from '@/entities/Food';

export interface FoodFormProps {
    food: AllFoodProps;
    className?: string;
}

// const initialReducers: ReducersList = {
//     loginForm: foodReducer,
// };
// <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
// </DynamicModuleLoader>

const FoodForm = memo((props: FoodFormProps) => {
    const { t } = useTranslation();
    const { className, food } = props;

    return (
        <VStack className={classNames(cls.FoodForm, {}, [className])}>
            <Text title={t('Форма Авторизации')} />
            <Button
            // onClick={onLoginClick}
            // theme={ButtonTheme.OUTLINE}
            // className={cls.loginBtn}
            // disabled={isLoading}
            >
                {t('Войти')}
            </Button>
            {food.name}
        </VStack>
    );
});

export default FoodForm;
