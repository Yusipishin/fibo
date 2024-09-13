import type { Meta, StoryObj } from '@storybook/react';
import { CartSidebarButton } from './CartSidebarButton';

const meta: Meta<typeof CartSidebarButton> = {
    component: CartSidebarButton,
    title: 'shared/CartSidebarButton',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
