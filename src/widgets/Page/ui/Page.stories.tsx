import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Page> = {
    component: Page,
    title: 'widgets/Page',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};
