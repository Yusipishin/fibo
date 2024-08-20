import type { Meta, StoryObj } from '@storybook/react';
import { HStack } from './HStack';

const meta: Meta<typeof HStack> = {
    component: HStack,
    title: 'shared/HStack',
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

export const Primary: Story = {
    args: {
        children: content,
    },
};
