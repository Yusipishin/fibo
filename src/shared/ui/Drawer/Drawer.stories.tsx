import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Text } from '../Text';

const meta: Meta<typeof Drawer> = {
    component: Drawer,
    title: 'shared/Drawer',
};
export default meta;

type Story = StoryObj<typeof meta>;

const content = (
    <>
        <Text text="Notification 1" />
        <Text text="Notification 2" />
        <Text text="Notification 3" />
    </>
);

export const Primary: Story = {
    args: {
        isOpen: true,
        children: content,
        height: 300,
    },
};
