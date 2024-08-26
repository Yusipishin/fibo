import type { Meta, StoryObj } from '@storybook/react';
import { FoodListNovelty } from './FoodListNovelty';

const meta: Meta<typeof FoodListNovelty> = {
    component: FoodListNovelty,
    title: 'shared/FoodListNovelty',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
