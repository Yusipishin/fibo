import type { Meta, StoryObj } from '@storybook/react';
import { FoodFormAddButton } from './FoodFormAddButton';

const meta: Meta<typeof FoodFormAddButton> = {
    component: FoodFormAddButton,
    title: 'shared/FoodFormAddButton',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
