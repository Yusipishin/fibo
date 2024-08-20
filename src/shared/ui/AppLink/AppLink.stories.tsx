import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Third: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.THIRD,
    },
};
