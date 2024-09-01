import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormWeight } from './FoodFormWeight';

const meta: Meta<typeof FoodFormWeight> = {
    component: FoodFormWeight,
    title: 'shared/FoodFormWeight',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
