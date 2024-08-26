import type { Meta, StoryObj } from '@storybook/react';
import { FoodItem } from './FoodItem';

const meta: Meta<typeof FoodItem> = {
    component: FoodItem,
    title: 'shared/FoodItem',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
