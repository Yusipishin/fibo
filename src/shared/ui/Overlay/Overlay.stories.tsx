import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
    component: Overlay,
    title: 'shared/Overlay',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
