import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
        theme: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'TEXT',
        theme: 'secondary',
    },
};

export const Third: Story = {
    args: {
        children: 'TEXT',
        theme: 'third',
    },
};

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: 'outline',
    },
};
