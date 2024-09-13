import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'shared/Sidebar',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
