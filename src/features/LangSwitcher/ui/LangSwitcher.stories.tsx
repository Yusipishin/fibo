import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    component: LangSwitcher,
    title: 'features/LangSwitcher',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
