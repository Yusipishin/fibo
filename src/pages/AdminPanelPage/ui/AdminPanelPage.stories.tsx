import type { Meta, StoryObj } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AdminPanelPage> = {
    component: AdminPanelPage,
    title: 'pages/AdminPanelPage',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};
