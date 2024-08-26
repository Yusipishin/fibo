import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { FoodPath } from '../../model/consts/food';
import { AllFoodProps } from '../../model/types/food';
import FoodItem from '../FoodItem/FoodItem';
import cls from './FoodList.module.scss';

interface FoodListProps {
    title: string;
    endpoint: FoodPath;
    className?: string;
}

export const FoodList = memo((props: FoodListProps) => {
    const { t } = useTranslation();
    const { className, endpoint, title } = props;
    const { data, isError, isLoading } = useGetList<AllFoodProps, FoodPath>(
        endpoint,
    );

    if (isError) {
        return (
            <Text
                text={t('Произошла непредвиденная ошибка')}
                theme={TextTheme.ERROR}
            />
        );
    }

    if (isLoading) {
        <Text text={t('Загрузка...')} />;
    }

    return (
        <div className={classNames(cls.FoodList, {}, [className])}>
            <Text className={cls.title} title={t(title)} />
            {/* eslint-disable-next-line react/jsx-max-props-per-line */}
            <HStack max wrap gap="32" align="stretch" justify="between">
                {data?.map((item) => (
                    <FoodItem key={item.id} data={item} />
                ))}
            </HStack>
        </div>
    );
});
