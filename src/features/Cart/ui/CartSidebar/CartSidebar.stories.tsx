import type { Meta, StoryObj } from '@storybook/react';
import { CartSidebar } from './CartSidebar';

const meta: Meta<typeof CartSidebar> = {
    component: CartSidebar,
    title: 'shared/CartSidebar',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
