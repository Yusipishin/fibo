import type { Meta, StoryObj } from '@storybook/react';
import { FoodModal } from './FoodModal';

const meta: Meta<typeof FoodModal> = {
    component: FoodModal,
    title: 'shared/FoodModal',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
