import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    component: Flex,
    title: 'shared/Flex',
};
export default meta;

type Story = StoryObj<typeof meta>;

const content = (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
);

export const Row: Story = {
    args: {
        children: content,
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: content,
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: content,
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: content,
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: content,
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: content,
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: content,
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: content,
    },
};
