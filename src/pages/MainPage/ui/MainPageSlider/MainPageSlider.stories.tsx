import type { Meta, StoryObj } from '@storybook/react';
import { MainPageSlider } from './MainPageSlider';

const meta: Meta<typeof MainPageSlider> = {
    component: MainPageSlider,
    title: 'shared/MainPageSlider',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
