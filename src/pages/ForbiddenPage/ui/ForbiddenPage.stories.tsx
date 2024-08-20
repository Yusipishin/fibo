import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ForbiddenPage> = {
    component: ForbiddenPage,
    title: 'pages/ForbiddenPage',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};
