import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'widgets/Header',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};

export const Scrolled: Story = {
    args: {
        scrolled: true,
    },
};
