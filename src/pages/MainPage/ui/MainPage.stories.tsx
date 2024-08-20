import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage',
    args: {
        to: '/',
    },
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
