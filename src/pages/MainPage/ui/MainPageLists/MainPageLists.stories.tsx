import type { Meta, StoryObj } from '@storybook/react';
import { MainPageLists } from './MainPageLists';

const meta: Meta<typeof MainPageLists> = {
    component: MainPageLists,
    title: 'shared/MainPageLists',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
