import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormAdditionalIngredients } from './FoodFormAdditionalIngredients';

const meta: Meta<typeof FoodFormAdditionalIngredients> = {
    component: FoodFormAdditionalIngredients,
    title: 'shared/FoodFormAdditionalIngredients',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
