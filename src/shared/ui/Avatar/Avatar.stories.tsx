import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import imagePath from '../../assets/tests/test-img.jpg';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'shared/Avatar',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: 50,
        src: imagePath,
    },
};

export const Primary: Story = {
    args: {
        size: 150,
        src: imagePath,
    },
};

export const Big: Story = {
    args: {
        size: 300,
        src: imagePath,
    },
};
