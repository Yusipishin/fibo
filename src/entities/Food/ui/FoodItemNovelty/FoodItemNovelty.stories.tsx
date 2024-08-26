import type { Meta, StoryObj } from '@storybook/react';
import { FoodItemNovelty } from './FoodItemNovelty';

const meta: Meta<typeof FoodItemNovelty> = {
    component: FoodItemNovelty,
    title: 'shared/FoodItemNovelty',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
