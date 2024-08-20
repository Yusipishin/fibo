import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from './Portal';
import { Text } from '../Text';

const meta: Meta<typeof Portal> = {
    component: Portal,
    title: 'shared/Portal',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="PORTAL" />,
        container: document.getElementById('storybook-root'),
    },
};
