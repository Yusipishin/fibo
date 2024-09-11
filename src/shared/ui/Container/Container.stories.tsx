import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
    component: Container,
    title: 'shared/Container',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
