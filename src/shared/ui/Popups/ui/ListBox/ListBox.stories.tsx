import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
    title: 'shared/ListBox',
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'click',
        items: [
            { content: '12333333333333333333333333', value: '123' },
            { content: 'gertherth455', value: '34343' },
            { content: '232523grgtrtg35g34g', value: '2354' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        value: 'click',
        direction: 'top left',
        items: [
            { content: '12333333333333333333333333', value: '123' },
            { content: 'gertherth455', value: '34343' },
            { content: '232523grgtrtg35g34g', value: '2354' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        value: 'click',
        direction: 'top right',
        items: [
            { content: '12333333333333333333333333', value: '123' },
            { content: 'gertherth455', value: '34343' },
            { content: '232523grgtrtg35g34g', value: '2354' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        value: 'click',
        direction: 'bottom left',
        items: [
            { content: '12333333333333333333333333', value: '123' },
            { content: 'gertherth455', value: '34343' },
            { content: '232523grgtrtg35g34g', value: '2354' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        value: 'click',
        direction: 'bottom right',
        items: [
            { content: '12333333333333333333333333', value: '123' },
            { content: 'gertherth455', value: '34343' },
            { content: '232523grgtrtg35g34g', value: '2354' },
        ],
    },
};
