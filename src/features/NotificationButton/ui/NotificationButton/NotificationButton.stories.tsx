import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    component: NotificationButton,
    title: 'features/NotificationButton',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
