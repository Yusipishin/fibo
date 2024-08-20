import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    component: PageLoader,
    title: 'widgets/PageLoader',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
