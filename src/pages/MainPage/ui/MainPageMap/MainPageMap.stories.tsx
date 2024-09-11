import type { Meta, StoryObj } from '@storybook/react';
import { MainPageMap } from './MainPageMap';

const meta: Meta<typeof MainPageMap> = {
    component: MainPageMap,
    title: 'shared/MainPageMap',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
