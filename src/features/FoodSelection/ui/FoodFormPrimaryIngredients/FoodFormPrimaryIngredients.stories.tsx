import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormPrimaryIngredients } from './FoodFormPrimaryIngredients';

const meta: Meta<typeof FoodFormPrimaryIngredients> = {
    component: FoodFormPrimaryIngredients,
    title: 'shared/FoodFormPrimaryIngredients',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
