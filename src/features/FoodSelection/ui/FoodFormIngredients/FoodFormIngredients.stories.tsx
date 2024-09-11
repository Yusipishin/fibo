import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormIngredients } from './FoodFormIngredients';

const meta: Meta<typeof FoodFormIngredients> = {
    component: FoodFormIngredients,
    title: 'shared/FoodFormIngredients',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
