import type { Meta, StoryObj } from '@storybook/react';
import { FoodInfiniteList } from './FoodInfiniteList';

const meta: Meta<typeof FoodInfiniteList> = {
    component: FoodInfiniteList,
    title: 'shared/FoodLists',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
