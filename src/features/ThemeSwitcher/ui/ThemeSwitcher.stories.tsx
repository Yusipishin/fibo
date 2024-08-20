import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'features/ThemeSwitcher',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
