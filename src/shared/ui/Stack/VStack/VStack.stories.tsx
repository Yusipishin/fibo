import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta: Meta<typeof VStack> = {
    component: VStack,
    title: 'shared/VStack',
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
