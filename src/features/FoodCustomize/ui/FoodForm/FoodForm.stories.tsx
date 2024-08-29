import type { Meta, StoryObj } from '@storybook/react';
import { FoodForm } from './FoodForm';

const meta: Meta<typeof FoodForm> = {
    component: FoodForm,
    title: 'shared/FoodForm',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
