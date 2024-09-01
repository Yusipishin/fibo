import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormInfo } from './FoodFormInfo';

const meta: Meta<typeof FoodFormInfo> = {
    component: FoodFormInfo,
    title: 'shared/FoodFormInfo',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
