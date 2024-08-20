import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    component: PageError,
    title: 'widgets/PageError',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
