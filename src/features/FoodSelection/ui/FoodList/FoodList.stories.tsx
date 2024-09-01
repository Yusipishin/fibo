import type { Meta, StoryObj } from '@storybook/react';
import { FoodList } from './FoodList';

const meta: Meta<typeof FoodList> = {
    component: FoodList,
    title: 'shared/FoodLists',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
