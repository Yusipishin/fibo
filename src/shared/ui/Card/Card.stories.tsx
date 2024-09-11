import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'shared/Card',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // children: <Text title="test" text="text text" />,
    },
};

export const Outline: Story = {
    args: {
        // children: <Text title="test" text="text text" />,
        theme: CardTheme.OUTLINE,
    },
};
