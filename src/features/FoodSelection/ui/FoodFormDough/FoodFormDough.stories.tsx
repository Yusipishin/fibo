import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormDough } from './FoodFormDough';

const meta: Meta<typeof FoodFormDough> = {
    component: FoodFormDough,
    title: 'shared/FoodFormDough',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
