import type { Meta, StoryObj } from '@storybook/react';
import { CartSidebarItem } from './CartSidebarItem';

const meta: Meta<typeof CartSidebarItem> = {
    component: CartSidebarItem,
    title: 'shared/CartSidebarItem',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
