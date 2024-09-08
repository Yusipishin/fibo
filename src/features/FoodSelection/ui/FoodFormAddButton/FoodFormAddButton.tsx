import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface FoodFormAddButtonProps {
    price: number;
    className?: string;
}

export const FoodFormAddButton = memo((props: FoodFormAddButtonProps) => {
    const { t } = useTranslation();
    const { className, price } = props;

    return (
        <Button max className={classNames('', {}, [className])} theme="accent">
            {t('Добавить в корзину ') + price}
        </Button>
    );
});
