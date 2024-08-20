import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import TestIcon from '../../assets/tests/test-icon.svg';

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'shared/Icon',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        Svg: TestIcon,
    },
};

export const Inverted: Story = {
    args: {
        Svg: TestIcon,
        inverted: true,
    },
};
