import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../Button';
import { VStack } from '../../../Stack';

const meta: Meta<typeof Popover> = {
    component: Popover,
    title: 'shared/Popover',
};
export default meta;

type Story = StoryObj<typeof meta>;

const content = (
    <VStack gap="16" max>
        <div>ITEM 1</div>
        <div>ITEM 2</div>
        <div>ITEM 3</div>
    </VStack>
);

export const Primary: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: content,
    },
};
