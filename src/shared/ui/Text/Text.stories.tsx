import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize } from './Text';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Text',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
    },
};

export const Error: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        theme: 'error',
    },
};

export const OnlyTitle: Story = {
    args: {
        // title: 'Main Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Random text text text text',
    },
};

export const SizeL: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        size: TextSize.S,
    },
};

export const SizeXL: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        size: TextSize.XL,
    },
};

export const SizeXS: Story = {
    args: {
        // title: 'Main Title',
        text: 'Random text text text text',
        size: TextSize.XS,
    },
};
