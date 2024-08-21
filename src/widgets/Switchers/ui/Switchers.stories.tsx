import type { Meta, StoryObj } from '@storybook/react';
import { Switchers } from './Switchers';

const meta: Meta<typeof Switchers> = {
    component: Switchers,
    title: 'shared/Switchers',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
