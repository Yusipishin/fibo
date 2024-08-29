import type { Meta, StoryObj } from '@storybook/react';
import { FoodListWrapper } from './FoodListWrapper';

const meta: Meta<typeof FoodListWrapper> = {
    component: FoodListWrapper,
    title: 'shared/FoodList',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
