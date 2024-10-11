import { FC, SVGProps } from 'react';
import MastercardIcon from '@/shared/assets/img/icons/mastercard-ic.svg';
import PaypalIcon from '@/shared/assets/img/icons/paypal-ic.svg';
import VisaIcon from '@/shared/assets/img/icons/visa-ic.svg';
import FacebookIcon from '@/shared/assets/img/icons/messengers/fb-ic.svg';
import FacebookMessengerIcon from '@/shared/assets/img/icons/messengers/fbm-ic.svg';
import SkypeIcon from '@/shared/assets/img/icons/messengers/skype-ic.svg';
import TelegramIcon from '@/shared/assets/img/icons/messengers/tg-ic.svg';
import ViberIcon from '@/shared/assets/img/icons/messengers/viber-ic.svg';
import VkIcon from '@/shared/assets/img/icons/messengers/vk-ic.svg';

export const paymentIcons: FC<SVGProps<SVGSVGElement>>[] = [
    VisaIcon,
    PaypalIcon,
    MastercardIcon,
];

export const messengersIcons: FC<SVGProps<SVGSVGElement>>[] = [
    ViberIcon,
    SkypeIcon,
    FacebookMessengerIcon,
    TelegramIcon,
    FacebookIcon,
    VkIcon,
];
