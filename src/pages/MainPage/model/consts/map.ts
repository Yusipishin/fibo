import { FC, SVGProps } from 'react';
import Icon1 from '@/shared/assets/img/icons/map/1.svg';
import Icon2 from '@/shared/assets/img/icons/map/2.svg';
import Icon3 from '@/shared/assets/img/icons/map/3.svg';
import Icon4 from '@/shared/assets/img/icons/map/4.svg';

interface mainSlide {
    Svg: FC<SVGProps<SVGSVGElement>>;
    description: string;
}

export const mapIcons: mainSlide[] = [
    {
        Svg: Icon1,
        description: 'Возможность оплаты банковской картой',
    },
    {
        Svg: Icon2,
        description: 'Оплата только после получения заказа',
    },
    {
        Svg: Icon3,
        description: 'Удобное оформление заказа',
    },
    {
        Svg: Icon4,
        description: 'Доставим заказ в кратчайшие сроки',
    },
];
