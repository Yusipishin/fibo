import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
